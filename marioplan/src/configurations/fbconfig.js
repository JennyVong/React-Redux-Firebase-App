import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseconfig = {
    apiKey: "AIzaSyDOWMwV3yjMTI0y5E4-LepYwm2qJMZLIu8",
    authDomain: "jv-marioplan.firebaseapp.com",
    databaseURL: "https://jv-marioplan.firebaseio.com",
    projectId: "jv-marioplan",
    storageBucket: "jv-marioplan.appspot.com",
    messagingSenderId: "1000939212938"
  };

  firebase.initializeApp(firebaseconfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;