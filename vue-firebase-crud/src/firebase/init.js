import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB_Dval7wjY5lQfAUVpN0XBZpiwp3ITpUQ",
    authDomain: "vue-firebase-crud-e119b.firebaseapp.com",
    databaseURL: "https://vue-firebase-crud-e119b.firebaseio.com",
    projectId: "vue-firebase-crud-e119b",
    storageBucket: "vue-firebase-crud-e119b.appspot.com",
    messagingSenderId: "314116602947",
    appId: "1:314116602947:web:1f45a5034593a4449ba8f6",
    measurementId: "G-BQ7Y33MRY8"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({
    timestampsInSnapshots: true
})

firebase.analytics();

export default firebaseApp.firestore()