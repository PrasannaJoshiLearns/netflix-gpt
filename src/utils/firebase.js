// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAEKW0g-yk6CnO-AcJUH5EGzW1p6Vjp0jY',
  authDomain: 'netflixgpt-10286.firebaseapp.com',
  projectId: 'netflixgpt-10286',
  storageBucket: 'netflixgpt-10286.firebasestorage.app',
  messagingSenderId: '731318624869',
  appId: '1:731318624869:web:ad7fb34ea046887b045c8c',
  measurementId: 'G-F9BY0RK2KM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();
