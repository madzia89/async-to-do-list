import firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBYQP1K9upojzi2XusIFreJB0dLo9a3V-M",
    authDomain: "todo-hw-week7.firebaseapp.com",
    databaseURL: "https://todo-hw-week7.firebaseio.com",
    projectId: "todo-hw-week7",
    storageBucket: "todo-hw-week7.appspot.com",
    messagingSenderId: "803633460567"
};
firebase.initializeApp(config);


export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
