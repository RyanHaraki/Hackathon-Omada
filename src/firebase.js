import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB15sbo342a7CDFXY9CTf9hBNCzJ72nUYQ",
  authDomain: "hackathon-omada.firebaseapp.com",
  projectId: "hackathon-omada",
  storageBucket: "hackathon-omada.appspot.com",
  messagingSenderId: "790016831933",
  appId: "1:790016831933:web:ac37b5f2c47b97ffaae2d4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();
const auth = firebaseApp.auth();

// export default db;
export { auth, provider };
