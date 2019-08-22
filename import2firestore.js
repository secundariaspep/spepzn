const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: ""
  });

var db = firebase.firestore();

var menu =[

]

menu.forEach(function(obj) {
    db.collection("socioeducativo").add({
        id:obj.id,
         alta: obj.alta,
       escuela: obj.escuela,
       ticket:obj.ticket,
       ticket_fecha:obj.ticket_fecha,
       alumno_dni:obj.alumno_dni,
       alumno: obj.alumno,
       descripcion: obj.descripcion,
       region:obj.region,
       region_ingreso: obj.region_ingreso,
       circuito: obj.circuito,
       observaciones: obj.observaciones,
       actualizacion: obj.actualizacion,
       año: obj.año,
       curso: obj.curso
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});