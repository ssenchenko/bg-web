import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebaseTestConfig = {
  apiKey: process.env.REACT_APP_TEST_API_KEY,
  authDomain: process.env.REACT_APP_TEST_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_TEST_DATABASE_URL,
  projectId: process.env.REACT_APP_TEST_PROJECT_ID,
  storageBucket: process.env.REACT_APP_TEST_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_TEST_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_TEST_APP_ID,
};

const config = process.env.NODE_ENV == "production" ? firebaseConfig : firebaseTestConfig;

firebase.initializeApp(config);

export default firebase;
