import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyANt6oSwl6pe5_H1iVLDsaeV1lK_3Op4Wk",
    authDomain: "interstembowl.firebaseapp.com",
    projectId: "interstembowl",
    storageBucket: "interstembowl.appspot.com",
    messagingSenderId: "1080985450063",
    appId: "1:1080985450063:web:0b869e56a31414648edc3a",
    measurementId: "G-XZMV4RFL5R"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire; 