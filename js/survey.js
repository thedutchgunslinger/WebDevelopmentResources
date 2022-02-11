let radioVoorbeeldJa = document.getElementById("heeftVoorbeeldJa");
let radioVoorbeeldNee = document.getElementById("heeftVoorbeeldNee");
let voorbeeldContainer = document.getElementById("voorbeeldTekstVeldContainer");
let uitlegTekstVeld = document.getElementById("uitlegTekstVeld");
let voorbeeldTekstVeld = document.getElementById("voorbeeldTekstVeld");
let submitBtn = document.getElementById("submitBtn");
let surveyForm = document.getElementById("surveyForm");
let confirmSend = document.getElementById("confirmSend");
let voorbeeldResponse = "";

radioVoorbeeldJa.addEventListener("click", function () {
    voorbeeldContainer.classList.remove("d-none");
    
});
radioVoorbeeldNee.addEventListener("click", function () {
  voorbeeldContainer.classList.add("d-none");
});




// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

// Initialize Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBR-ZdAEm9f_msiiND4FoexQPtEACzkLCk",
  authDomain: "webdev-voorbeelden.firebaseapp.com",
  projectId: "webdev-voorbeelden",
});

var db = firebase.firestore();

window.onload = function () {
  document.getElementById("surveyForm").onsubmit = function () {
      if(voorbeeldTekstVeld.value == ""){
            voorbeeldResponse = "n.v.t.";
        }else{
            voorbeeldResponse = voorbeeldTekstVeld.value;
        }
    db.collection("survey").add({
        omschrijvingIdee: uitlegTekstVeld.value,
        voorbeeldIdee: voorbeeldResponse
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

    surveyForm.classList.add("d-none");
    confirmSend.classList.remove("d-none");
    return false;
  };
};


