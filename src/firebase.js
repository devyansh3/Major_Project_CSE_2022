import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const app = initializeApp({
  apiKey: "AIzaSyCvTEsPHSq6iBqJHB3yeei9xQBhcRCGm3U",
  authDomain: "aadhaar-obs.firebaseapp.com",
  projectId: "aadhaar-obs",
  storageBucket: "aadhaar-obs.appspot.com",
  messagingSenderId: "690903726445",
  appId: "1:690903726445:web:754a4da01167807a318264"
});

getFirestore()

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
