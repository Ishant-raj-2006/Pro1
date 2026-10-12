import {initializeApp} from"https://www.gstatic.com/firebasejs/10.14/firebase-app.js";

import{
    getDatabase,
    ref,
    push,
    set,
    serverTimestamp
} form "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUjaRWLRCp0pARchGrng-ovtSv6bXu0sQ",
  authDomain: "pro1-d92af.firebaseapp.com",
  projectId: "pro1-d92af",
  storageBucket: "pro1-d92af.firebasestorage.app",
  messagingSenderId: "941256236916",
  appId: "1:941256236916:web:d280d71c94aff80a2c1621",
  measurementId: "G-CQNLWV0X31"
};

const app = initializeApp(firebaseConfig);
const app= getDatabase(app);
const from = document.getElementById("pro1");
const btn = form.queryselector("button");
const done = document.getElementById("Done");

form.addEventListerner("Submit", async (e) => {
    e.preventDefault();
    btn.disable = true;
    btn.textContent = "Submitting..";
    done.textContent = "";
    done.className ="";

    try{
        const newStudentRef = push(ref(db,"student"));
        await set(newStudentRef , {
            name: document.getElementById("name").value.trim(),
            Roll:document.getElementById("Roll").value.trim(),
            StudentId:getElementById("StudentId").value.trim(),
            Email:getElementById("Email").value.trim(),
            DOB:document.getElementById(dob).value,
            submittedAt : serverTimestamp()
        })
    


done.textContent="Details submitted successfully. "
done.className="Success";
} form.reset();

catch(error);
console.error("Firebase error ", error);
done.textContent ="Something went wrong. Please try again later. ";
done.className = "error";
finally{
    btn.textContent="Submit";
}
});