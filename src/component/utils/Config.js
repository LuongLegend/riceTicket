import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
require('firebase/database');

const firebaseConfig = {
    apiKey: "AIzaSyDPVC2qYbsKlDmVQHGc4sV62AJhaS8h4bQ",
    authDomain: "orderlunch-7b694.firebaseapp.com",
    databaseURL: "https://orderlunch-7b694-default-rtdb.firebaseio.com",
    projectId: "orderlunch-7b694",
    storageBucket: "orderlunch-7b694.appspot.com",
    messagingSenderId: "746473971349",
    appId: "1:746473971349:web:0d759bccaea12b85ea059c",
    measurementId: "G-14HZ1FQK23"
};

export const db = firebase.initializeApp(firebaseConfig).database();