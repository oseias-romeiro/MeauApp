import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, FlatList, Touchable, TouchableOpacity } from 'react-native';
import { getDocs, collection, where, query, getDoc } from 'firebase/firestore';

import { useAuth } from '../../config/auth';
import config from '../../config';
import Container from '../../components/Container';
import styles from './style';


const ListChats = ({ navigation }) => {
    const { user } = useAuth();
    const [chats, setChats] = useState([]);

    const getChats = async () => {
        // get chats where sender = user.docId or reciever = user.docId
        const chatsQuery = query(collection(config.db, "chats"), where("users", "array-contains", user.uid));
        getDocs(chatsQuery).then((chatsDocs) => {
            let docs = chatsDocs.docs.map(doc => [doc.data(), doc.id]);
            setChats(docs);
        }).catch((error) => {
            console.log("erro ao pegar chats: ", error);
        });
    }
    getChats();

    const chat = (chatId) => {
        navigation.navigate('Chat', {chatId: chatId});
    }

    return (
        <Container>
                <View style={styles.content}>
                    <FlatList
                        data={chats}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={ ()=>chat(item[1]) } style={styles.chatCard}>
                                <Text>{ item[0].users[1] }</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item[1]}
                    />
                </View>
        </Container>
    );
};

export default ListChats;
