import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { doc, getDoc, setDoc, query, where, getDocs, collection } from 'firebase/firestore';
import config from './index.js';

export const handleNotification = async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
})

export async function registerForPushNotificationsAsync() {
    let token;
  
    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Falha ao obter token!');
            return;
        }
        token = await Notifications.getExpoPushTokenAsync();
        console.log("TOKEN: ", token);
    } else {
        alert('Notificação precisa de um dispotiivo físico para funcionar');
    }

    return token.data;
}

export async function schedulePushNotification(title, body) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body
      },
      trigger: { seconds: 2 },
    });
}

export async function sendPushNotification(title, body, sender, reciever) {
    
    // get token from user by uid field using query
    const q = query(collection(config.db, 'users'), where('uid', '==', reciever));

    const querySnapshot = await getDocs(q)

    if (querySnapshot.size > 0 && querySnapshot.docs[0].data().token) {
        const token = querySnapshot.docs[0].data().token;

        const message = {
        to: token,
        sound: 'default',
        title: title,
        body: body,
        data: { sender: sender, reciever: reciever },
        };
    
        await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
        });

        saveNotification(title, body, sender, reciever);

    }else {
        throw new Error('Token não encontrado!')
    }
}

export const saveNotification = async (title, body, sender, reciever) => {
    const notificationRef = doc(config.db, "notifications");
    const notificationDoc = await getDoc(notificationRef);
    if (notificationDoc.exists()) {
        console.log("Notificacao ja existe!");
    } else {
        await setDoc(notificationRef, {
            title: title,
            body: body,
            sender: sender,
            reciever: reciever,
        });
    }
};

