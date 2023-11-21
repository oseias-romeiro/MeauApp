import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { doc, getDoc, setDoc } from 'firebase/firestore';
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

export async function sendPushNotification(to, title, body, sender, reciever) {
    const message = {
      to: to,
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
}

export const saveNotification = async (notification) => {
    const notificationRef = doc(config.db, "notifications", notification.request.identifier);
    const notificationDoc = await getDoc(notificationRef);
    if (notificationDoc.exists()) {
        console.log("Notificacao ja existe!");
    } else {
        await setDoc(notificationRef, {
            title: notification.request.content.title,
            body: notification.request.content.body,
            date: notification.date,
            identifier: notification.request.identifier,
            sender: notification.request.content.data.sender,
            reciever: notification.request.content.data.reciever,
        });
    }
};

