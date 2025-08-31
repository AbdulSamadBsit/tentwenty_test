import firebase from '@react-native-firebase/app';

type CallbackType = (result: { success: number }) => void;

const firebaseConfig = {
  apiKey: "AIzaSyBNGtou5jVMb4d7LWVfTMWgnxAwzyTnfaw",
  authDomain: "gorilla-37a2e.firebaseapp.com",
  databaseURL: '',
  projectId: "testproject-d9ccc",
  storageBucket: "gorilla-37a2e.appspot.com",
  messagingSenderId: "303841620593",
  appId: "1:303841620593:android:461cc89c5553c9423161d0"
};

const Firebase = (CALLBACK: CallbackType): void => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig).then(() => {
      CALLBACK({ success: 1 });
    });
  } else {
    firebase.app();
    CALLBACK({ success: 1 });
  }
};

export default Firebase;
