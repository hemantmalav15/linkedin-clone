import firebase from './firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDB5CsU3lNpzko8BG0t9rZOQfr93FZklTY",
    authDomain: "linkedin-clone-1eee9.firebaseapp.com",
    projectId: "linkedin-clone-1eee9",
    storageBucket: "linkedin-clone-1eee9.appspot.com",
    messagingSenderId: "830195532421",
    appId: "1:830195532421:web:a68430da86e67f70d7dfec"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };