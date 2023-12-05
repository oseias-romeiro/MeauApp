import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, FlatList, Touchable, TouchableOpacity } from 'react-native';
import { getDocs, collection, where, query } from 'firebase/firestore';

import { useAuth } from '../../config/auth';
import config from '../../config';
import Container from '../../components/Container';
import styles from './style';
import { deleteNotification } from '../../services/notifications';

const ListChats = ({ navigation }) => {
    const { user } = useAuth();
    const [chats, setChats] = useState([]);

    const getChats = async () => {
        // query where notifications has reciever = user.docId
        const notificationsQuery = query(collection(config.db, "chats"), where("reciever", "==", user.uid));
        const notificationsDocs = await getDocs(notificationsQuery);
        setNotifications(notificationsDocs.docs.map(doc => [doc.data(), doc.id]));
    }
    getChats();

    const chat = (chatId) => {
        navigation.navigate('Chat', {chatId: chatId});
    }

    return (
        <Container styles={styles.content}>
            <ScrollView>
                <View>
                    <FlatList
                        data={chats}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.chatButton} onPress={ ()=>chat(item.id) }>
                                <Text>{ item.sender }</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </ScrollView>
        </Container>
    );
};

export default ListChats;
