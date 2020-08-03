import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database"
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyDRNWw_G9mjdyMbfrutN95UzSuH4oq_lAA",
    authDomain: "slack-a032e.firebaseapp.com",
    databaseURL: "https://slack-a032e.firebaseio.com",
    projectId: "slack-a032e",
    storageBucket: "slack-a032e.appspot.com",
    messagingSenderId: "1027695772276",
    appId: "1:1027695772276:web:2f030a1227872e79d84721",
    measurementId: "G-68HSBF00JC"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;