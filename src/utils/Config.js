import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
require('firebase/database');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBC-RdjkcyNh1X32B-mkTXhq3ECj5DCZUg",
    authDomain: "orderlunch10.firebaseapp.com",
    databaseURL: "https://orderlunch10-default-rtdb.firebaseio.com",
    projectId: "orderlunch10",
    storageBucket: "orderlunch10.appspot.com",
    messagingSenderId: "320029195810",
    appId: "1:320029195810:web:5f3411d8bccbedbdc1547b",
    measurementId: "G-WC0FRV7NVT"
  };

export const db = firebase.initializeApp(firebaseConfig).database();