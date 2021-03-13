import * as firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyBha3U_DRzkGKUjrJVYtYq20SEc6nt07xM",
    authDomain: "entryhelp-5b0cf.firebaseapp.com",
    projectId: "entryhelp-5b0cf",
    storageBucket: "entryhelp-5b0cf.appspot.com",
    messagingSenderId: "287092437169",
    appId: "1:287092437169:web:65a4e05844238da36a3290"
};


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

