// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

// Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5EJ9_jiwvpPmMOce4zaF4KIob7mpZNJE",
    authDomain: "ainorsocks.firebaseapp.com",
    databaseURL: "https://ainorsocks-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ainorsocks",
    storageBucket: "ainorsocks.appspot.com",
    messagingSenderId: "174698397490",
    appId: "1:174698397490:web:f625c435b07d7e3326e12b",
    measurementId: "G-0E2KVV4W4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to write data to Firebase
function writeToDatabase(word) {
    const dbRef = ref(database, 'words/' + Date.now()); // Use timestamp as a unique key
    set(dbRef, {
        word: word,
        timestamp: new Date().toISOString()
    })
    .then(() => {
        console.log("Data saved successfully!");
        document.getElementById('output').innerText = `Word "${word}" has been saved to the database!`;
    })
    .catch((error) => {
        console.error("Error saving data:", error);
        document.getElementById('output').innerText = "Error saving data: " + error.message;
    });
}

// Attach event listener to form submission
document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload
    const word = document.getElementById('dataInput').value;
    if (word) {
        writeToDatabase(word); // Save the word to Firebase
        document.getElementById('dataInput').value = ''; // Clear the input field
    }
});
