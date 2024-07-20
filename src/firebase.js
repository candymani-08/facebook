import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCmEx30ysTnmh8B4aQypQ_gtRFfxR7DlXI",
  authDomain: "login-auth-b302f.firebaseapp.com",
  projectId: "login-auth-b302f",
  storageBucket: "login-auth-b302f.appspot.com",
  messagingSenderId: "106534636980",
  appId: "1:106534636980:web:1d01b22f459b778229b6e1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth(); 


export default app;