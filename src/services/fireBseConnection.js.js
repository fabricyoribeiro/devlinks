import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDF10F46Ic3CFfcCXNstjeHobFvxmxNAoA",
  authDomain: "devlinks-1530c.firebaseapp.com",
  projectId: "devlinks-1530c",
  storageBucket: "devlinks-1530c.appspot.com",
  messagingSenderId: "54000690253",
  appId: "1:54000690253:web:dcd261f3dc5b28d52c6804",
  measurementId: "G-M8VS9D7HXS"
};

const fireBaseApp = initializeApp(firebaseConfig)

const db = getFirestore(fireBaseApp)
const auth = getAuth(fireBaseApp)

export {db, auth}