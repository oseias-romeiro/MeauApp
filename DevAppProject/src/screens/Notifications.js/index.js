import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, FlatList, Touchable, TouchableOpacity } from 'react-native';
import { getDocs, collection, where, query } from 'firebase/firestore';

import { useAuth } from '../../config/auth';
import config from '../../config';
import Container from '../../components/Container';
import Header from '../../components/Header';
import styles from './style';

const NotificationsScreen = () => {
    const [notifications, setNotifications] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const getNotifications = async () => {
            // query where notifications has reciever = user.docId
            const notificationsQuery = query(collection(config.db, "notifications"), where("reciever", "==", user.uid));
            const notifications = await getDocs(notificationsQuery);
            console.log("notifications: ", notifications.docs.map(doc => doc.data()));
            setNotifications(notifications.docs.map(doc => doc.data()));
        }
        getNotifications();
    }, []);

    return (
        <Container styles={styles.content}>
            <Header text="Notificações"  backgroundColor={"#cfe9e5"} topBarColor={"#88c9bf"}/>
            <ScrollView>
                <View>
                    <FlatList
                        data={notifications}
                        renderItem={({ item }) => (
                            <View style={styles.notificationCard}>
                                <Text style={styles.notificationTitle}>{item.title}</Text>
                                <Text style={styles.notificationBody}>{item.body}</Text>
                                <View style={styles.buttonsLine}>
                                    <TouchableOpacity style={styles.chatButton}>
                                        <Text>Apagar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.chatButton}>
                                        <Text>Chat</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </ScrollView>
        </Container>
    );
};

export default NotificationsScreen;
