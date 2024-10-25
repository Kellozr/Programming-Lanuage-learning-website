// Import necessary functions from Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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

// Handle the form submission for sign-up
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents form from refreshing the page

    // Get input values
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Account created successfully
            const user = userCredential.user;

            // Send email verification
            sendEmailVerification(user)
                .then(() => {
                    alert(`Welcome ${fullname}! A confirmation email has been sent to ${email}. Please verify your email to continue.`);
                    // Optional: Redirect to a new page
                    window.location.href = 'index.html'; // Redirect after sign-up
                });
        })
        .catch((error) => {
            // Handle errors here
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});
