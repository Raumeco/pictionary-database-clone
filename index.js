import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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

async function getPalabras() {
    let palabras = [];
    const querySnapshot = await getDocs(collection(db, "palabras"));
    querySnapshot.forEach((doc) => {
        palabras.push({
            id: doc.id,
            value: doc.data().value
        });
    });
}

getCategorias()
getPalabras()

var categorias = []

async function getCategorias() {
    document.getElementById("selectCategorias").innerHTML = ""
    const querySnapshot = await getDocs(collection(db, "categorias"));
    querySnapshot.forEach((doc) => {
        let nombre = doc.data().name
        let id = doc.id
        categorias.push({
            id: id,
            name: nombre
        })
        document.getElementById("selectCategorias").innerHTML += `<option class="categoriaOption" value="${id}">${nombre}</option>`
    });
}

document.getElementById("newCategoria").addEventListener("click", async function(e) {
    let name = document.getElementById("inputCategoria").value;
    try {
        let found = false;
        categorias.forEach(element => {
            if(element.name.toLowerCase() === name.toLowerCase()) {
                found = true;
            }
        });

        if (found) {
            document.getElementById("inputCategoria").value = ""
            return
        };
        
        const docRef = await addDoc(collection(db, "categorias"), {
            name: name
        });
        
        
        categorias.push({
            id: docRef.id,
            name: name
        });

        document.getElementById("selectCategorias").innerHTML += `<option class="categoriaOption" value="${docRef.id}">${name}</option>`
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    document.getElementById("inputCategoria").value = ""
});


document.getElementById("newPalabra").addEventListener("click", async function(e) {
    let name = document.getElementById("inputPalabra").value;
    let categoria = document.getElementById("selectCategorias").value;

    try {        
        const docRef = await addDoc(collection(db, "palabras"), {
            value: name,
            categoria: categoria
        });

    } catch (e) {
        console.error("Error adding document: ", e);
    }
    document.getElementById("inputPalabra").value = ""
});