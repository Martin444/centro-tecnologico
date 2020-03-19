import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database';
import 'firebase/storage'

 const Config = {
    apiKey: "AIzaSyAV7YZ3YjctT2QZhCzLofw9EuVGFRaf9qw",
    authDomain: "cursosonline-d478d.firebaseapp.com",
    databaseURL: "https://cursosonline-d478d.firebaseio.com",
    projectId: "cursosonline-d478d",
    storageBucket: "cursosonline-d478d.appspot.com",
    messagingSenderId: "389424228474",
    appId: "1:389424228474:web:3dfed821ac7936053133c3",
    measurementId: "G-LKPGXKXBM4"
  };

  firebase.initializeApp(Config);

  export const { auth } = firebase;
  export const storage = firebase.storage();
  export const database = firebase.database();

  export const provider = new firebase.auth.FacebookAuthProvider();