// Import necessary functions from Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHh4Xsc-IXo_ippOT8e_uu6kiqCAnxBR8",
    authDomain: "code-wiz-29f18.firebaseapp.com",
    projectId: "code-wiz-29f18",
    storageBucket: "code-wiz-29f18.appspot.com",
    messagingSenderId: "9862930591",
    appId: "1:9862930591:web:714d0c13d05bcbdef942aa",
    measurementId: "G-30VSRN7J8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle the form submission for login
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents form from refreshing the page

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase login with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully logged in
            const user = userCredential.user;
            alert(`Welcome back, ${user.email}!`);

            // Redirect to the homepage after successful login
            window.location.href = 'homepage.html'; // Adjust this to your homepage URL
        })
        .catch((error) => {
            // Handle errors here
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});
