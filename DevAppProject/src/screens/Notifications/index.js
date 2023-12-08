import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, FlatList, Touchable, TouchableOpacity } from 'react-native';
import { getDocs, collection, where, query, addDoc, updateDoc, doc } from 'firebase/firestore';

import { useAuth } from '../../config/auth';
import config from '../../config';
import Container from '../../components/Container';
import styles from './style';
import { deleteNotification } from '../../services/notifications';

const NotificationsScreen = ({ navigation }) => {
    const [notifications, setNotifications] = useState([]);
    const { user } = useAuth();

    const getNotifications = async () => {
        // query where notifications has reciever = user.docId
        const notificationsQuery = query(collection(config.db, "notifications"), where("reciever", "==", user.uid));
        const notificationsDocs = await getDocs(notificationsQuery);
        setNotifications(notificationsDocs.docs.map(doc => [doc.data(), doc.id]));
    }
    getNotifications();

    const chat = (sender) => {
        addDoc(collection(config.db, "chats"), {
            users: [user.uid, sender],
            messages: []
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            navigation.navigate('Chat', {chatId: docRef.id});
        });
    }

    const adocao = (animal, sender, notificationId) => {
        updateDoc(doc(collection(config.db, "animais"), animal), {
            dono: sender
        }).then(() => {
            console.log("animal transferido!");
            deleteNotification(notificationId);
        });
    }

    return (
        <Container styles={styles.content}>
            <View>
                <FlatList
                    data={notifications}
                    renderItem={({ item }) => (
                        <View style={styles.notificationCard}>
                            <Text style={styles.notificationTitle}>{item[0].title}</Text>
                            <Text style={styles.notificationBody}>{item[0].body}</Text>
                            <View style={styles.buttonsLine}>
                                <TouchableOpacity style={styles.chatButton} onPress={ ()=>deleteNotification(item[1]) }>
                                    <Text>Rejeitar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.chatButton} onPress={ ()=>adocao(item[0].animal, item[0].sender, item[1]) } >
                                    <Text>Aceitar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.chatButton} onPress={ ()=>chat(item[0].sender) }>
                                    <Text>Chat</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item[1]}
                />
            </View>
        </Container>
    );
};

export default NotificationsScreen;
