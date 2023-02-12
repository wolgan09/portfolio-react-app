import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDOTYZSPz2Pa1QD4xJqUHQJM8JEsgsNCSw",
//   authDomain: "vivek-portfolio-966ec.firebaseapp.com",
//   projectId: "vivek-portfolio-966ec",
//   storageBucket: "vivek-portfolio-966ec.appspot.com",
//   messagingSenderId: "680953799444",
//   appId: "1:680953799444:web:25cb7958bff3be3fb5d801",
//   measurementId: "G-5JN397ZH5T"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
