// Replace the below config object with your own Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyApI3SFkrYn5mPvf_aEDSLjpW8Xq5jHZ3E",
  authDomain: "tourism-mabini-c997f.firebaseapp.com",
  projectId: "tourism-mabini-c997f",
  storageBucket: "tourism-mabini-c997f.firebasestorage.app",
  messagingSenderId: "241231715040",
  appId: "1:241231715040:web:a2711711120d9685bf8e85",
  measurementId: "G-WECRBHXWLM"
};

// Initialize Firebase
if (!window.firebase) {
  throw new Error('Firebase SDK must be loaded before firebase-config.js');
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

if (firebase.analytics) {
  try {
    firebase.analytics();
  } catch (error) {
    console.warn('Firebase Analytics is unavailable.', error);
  }
}

// Set up Google Auth provider
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Export providers for use in main.js
window.googleProvider = googleProvider;
