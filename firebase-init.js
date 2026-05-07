// Firebase Setup for Bahiya Fashionova

const firebaseConfig = {
  apiKey: "AIzaSyDFM6Ho5bl8et5QUcnP4rA3EmT1ramKUO8",
  authDomain: "bahiya-fashionova.firebaseapp.com",
  projectId: "bahiya-fashionova",
  storageBucket: "bahiya-fashionova.firebasestorage.app",
  messagingSenderId: "961937702113",
  appId: "1:961937702113:web:9d8328b4e73c155f3f4ba0",
  measurementId: "G-FL8GD6PYNG"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

window.db = db;
