const firebaseConfig = {
  apiKey: "AIzaSyB9INed_yWUDlL2gFCiZ0ny8XjWfICRl0k",
  authDomain: "contactpro-26.firebaseapp.com",
  projectId: "contactpro-26",
  storageBucket: "contactpro-26.firebasestorage.app",
  messagingSenderId: "536268704511",
  appId: "1:536268704511:web:6d4fe38f8bc88d554ddaca",
  measurementId: "G-01FECFKHN4"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e,preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;

    saveContact(name, email, number);

    alert("Message sent successfully!");
    document.getElementById("contactForm").reset();
}
function saveContact(name, email, number) {
    const newContact = database.ref("contacts").push();

    newContact.set({
        name: name,
        email: email,
        number: number
    })
}