import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.14/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUjaRWLRCp0pARchGrng-ovtSv6bXu0sQ",
  authDomain: "pro1-d92af.firebaseapp.com",
  databaseURL: "https://pro1-d92af-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pro1-d92af",
  storageBucket: "pro1-d92af.firebasestorage.app",
  messagingSenderId: "941256236916",
  appId: "1:941256236916:web:d280d71c94aff80a2c1621",
  measurementId: "G-CQNLWV0X31"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const form = document.getElementById("studentForm");
const btn = form ? form.querySelector("button") : null;
const done = document.getElementById("Done");

if (!form || !btn || !done) {
  throw new Error("Required form elements are missing.");
}

done.textContent = "Ready to submit.";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  btn.disabled = true;
  btn.textContent = "Submitting...";
  done.textContent = "";
  done.className = "";

  try {
    const newStudentRef = push(ref(db, "students"));
    await set(newStudentRef, {
      name: document.getElementById("name").value.trim(),
      roll: document.getElementById("Roll").value.trim(),
      studentId: document.getElementById("studentId").value.trim(),
      email: document.getElementById("Email").value.trim(),
      dob: document.getElementById("DOB").value,
      submittedAt: serverTimestamp()
    });

    done.textContent = "Details submitted successfully.";
    done.className = "success";
    form.reset();
  } catch (error) {
    console.error("Firebase error:", error);
    const message = error instanceof Error ? error.message : String(error);
    done.textContent = `Could not save details: ${message}`;
    done.className = "error";
  } finally {
    btn.disabled = false;
    btn.textContent = "Submit";
  }
});