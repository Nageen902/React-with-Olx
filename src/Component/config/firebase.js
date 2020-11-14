import* as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';




var firebaseConfig = {
    apiKey: "AIzaSyDPx2vIngPqMStEXbdFbZIPGb-o0S9XTnU",
    authDomain: "react-olx-cedf3.firebaseapp.com",
    databaseURL: "https://react-olx-cedf3.firebaseio.com",
    projectId: "react-olx-cedf3",
    storageBucket: "react-olx-cedf3.appspot.com",
    messagingSenderId: "52588433709",
    appId: "1:52588433709:web:948c2e6c2a5c18bcaac3a4"
  };
  // Initialize Firebase
  
  
  
  export default firebase.initializeApp(firebaseConfig);