import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC5W1G6Jf5tLe7vx0jyiTA_HPojQ_2xwuI",
    authDomain: "eshop-da90f.firebaseapp.com",
    projectId: "eshop-da90f",
    storageBucket: "eshop-da90f.appspot.com",
    messagingSenderId: "1062217732101",
    appId: "1:1062217732101:web:ab14ecaa751987849f0c6c",
    measurementId: "G-1JB0LVG8B8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };