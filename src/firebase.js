import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyASQ4vIQN5Zqik11ji-wqMag8aWPzVfr7U",
  authDomain: "inventario-f7ce5.firebaseapp.com",
  databaseURL: "https://inventario-f7ce5.firebaseio.com",
  projectId: "inventario-f7ce5",
  storageBucket: "inventario-f7ce5.appspot.com",
  messagingSenderId: "552089807098"
});

export const dB = app.database();
export const refdB = dB.ref("A42");


