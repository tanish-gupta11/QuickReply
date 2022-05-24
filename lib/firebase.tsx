import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCAMDj5r8U6HGeVNgmF8hda3IpHs21xUG4",
    authDomain: "quickreply-61e17.firebaseapp.com",
    projectId: "quickreply-61e17",
    storageBucket: "quickreply-61e17.appspot.com",
    messagingSenderId: "752825471927",
    appId: "1:752825471927:web:959f8b6f18b6fd8decce32",
    measurementId: "G-197LNS7X9T"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// initialize
export const db = firebase.database();