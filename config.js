import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAQuLuWBPSUB_sAXMai7IGw6EnVikWwgv8",
    authDomain: "projeto-67-7bd54.firebaseapp.com",
    projectId: "projeto-67-7bd54",
    storageBucket: "projeto-67-7bd54.appspot.com",
    messagingSenderId: "437804966278",
    appId: "1:437804966278:web:a1bac34d3f6769fbd1cc07"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();