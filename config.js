import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyANJwP_GUhinti_cJzWy22HhMiO12kdQhE",
    authDomain: "test-b15cb.firebaseapp.com",
    projectId: "test-b15cb",
    storageBucket: "test-b15cb.appspot.com",
    messagingSenderId: "522969114116",
    appId: "1:522969114116:web:af14a3bdd8ade8971bb751"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();