// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBP9auPVBRkrWmFUu7kQPDTptBSWKz8quc',
    authDomain: 'spark-47c12.firebaseapp.com',
    projectId: 'spark-47c12',
    storageBucket: 'spark-47c12.firebasestorage.app',
    messagingSenderId: '73398538293',
    appId: '1:73398538293:web:aa19172709565d9f23e17c',
    measurementId: 'G-Z7ME6HQ671',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
