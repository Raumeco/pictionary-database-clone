import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAPTTf0XBGT8vgbzrGN3qxR6NHiiMIMZJk",
    authDomain: "pictionary-clone.firebaseapp.com",
    projectId: "pictionary-clone",
    storageBucket: "pictionary-clone.appspot.com",
    messagingSenderId: "891886423451",
    appId: "1:891886423451:web:cebc2fe9e1bcc0d773253e"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

/* try {
    const docRef = await addDoc(collection(db, "palabras"), {
        value: "HOLAAAAAAA"
    });
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
} */