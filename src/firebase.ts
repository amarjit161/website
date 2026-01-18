import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZR-rr0kWBtV2tOxi5GfQhGz2XEKYdXDQ',
  authDomain: 'amar-42e3b.firebaseapp.com',
  projectId: 'amar-42e3b',
  storageBucket: 'amar-42e3b.firebasestorage.app',
  messagingSenderId: '868061496699',
  appId: '1:868061496699:web:f612e8eddb8257d096e9de',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

