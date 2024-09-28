import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



const firebaseConfig = {
    apiKey: "AIzaSyDlWofauJnchQezHJdVPe32-Qmzxjr-FSc",
    authDomain: "olxproject-77cb2.firebaseapp.com",
    projectId: "olxproject-77cb2",
    storageBucket: "olxproject-77cb2.appspot.com",
    messagingSenderId: "567294261413",
    appId: "1:567294261413:web:2f928d29a8bb7fe6b4b54c",
    measurementId: "G-BMNVCTW4ZQ"
  };



export default firebase.initializeApp(firebaseConfig)
