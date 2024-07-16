importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyCAwLqNzpo93KmIlLYErmaE49yvABOf9fU",
    authDomain: "cloud-message-app-3b6ab.firebaseapp.com",
    projectId: "cloud-message-app-3b6ab",
    storageBucket: "cloud-message-app-3b6ab.appspot.com",
    messagingSenderId: "101470413319",
    appId: "1:101470413319:web:93ee6c2ab1575e29c400a2"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("[firebase-messaging-sw.js] Received background message ", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});