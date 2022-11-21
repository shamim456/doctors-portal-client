// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.APP_AUTH_DOMAIN ,
//   projectId: process.env.PROJECT_ID ,
//   storageBucket: process.env.STORAGE_BUCKET ,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID ,
//   appId: process.env.APP_ID 
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZAmtjw9e4d_zRHxs1Uv-85h9TBfzRhDQ",
  authDomain: "doctors-portal-bbb1a.firebaseapp.com",
  projectId: "doctors-portal-bbb1a",
  storageBucket: "doctors-portal-bbb1a.appspot.com",
  messagingSenderId: "339110321036",
  appId: "1:339110321036:web:7bc2604206251d6886d4a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;