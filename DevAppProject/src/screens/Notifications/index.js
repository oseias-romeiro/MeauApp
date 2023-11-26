import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, FlatList, Touchable, TouchableOpacity } from 'react-native';
import { getDocs, collection, where, query } from 'firebase/firestore';

import { useAuth } from '../../config/auth';
import config from '../../config';
import Container from '../../components/Container';
import styles from './style';
import { deleteNotification } from '../../services/notifications';

const NotificationsScreen = () => {
    const [notifications, setNotifications] = useState([]);
    const { user } = useAuth();

    const getNotifications = async () => {
        // query where notifications has reciever = user.docId
        const notificationsQuery = query(collection(config.db, "notifications"), where("reciever", "==", user.uid));
        const notificationsDocs = await getDocs(notificationsQuery);
        setNotifications(notificationsDocs.docs.map(doc => [doc.data(), doc.id]));
    }
    getNotifications();

    return (
        <Container styles={styles.content}>
            <ScrollView>
                <View>
                    <FlatList
                        data={notifications}
                        renderItem={({ item }) => (
                            <View style={styles.notificationCard}>
                                <Text style={styles.notificationTitle}>{item[0].title}</Text>
                                <Text style={styles.notificationBody}>{item[0].body}</Text>
                                <View style={styles.buttonsLine}>
                                    <TouchableOpacity style={styles.chatButton} onPress={ ()=>deleteNotification(item[1]) }>
                                        <Text>Apagar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.chatButton}>
                                        <Text>Chat</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item) => item[1]}
                    />
                </View>
            </ScrollView>
        </Container>
    );
};

export default NotificationsScreen;
