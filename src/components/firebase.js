import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD7Xb0x2TEV9YQF__hFNprGmRJsT4LhsHA",
  authDomain: "jumia-clone.firebaseapp.com",
  databaseURL: "https://jumia-clone.firebaseio.com",
  projectId: "jumia-clone",
  storageBucket: "jumia-clone.appspot.com",
  messagingSenderId: "1056777445462",
  appId: "1:1056777445462:web:9467f96cb458a0e9eedbf7",
  measurementId: "G-M56CRM5DCQ",
};
// Initialize Firebase
var Fire = firebase.initializeApp(firebaseConfig);

export default Fire;
