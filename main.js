// Aggancio il bottone e la griglia a Java Script
const button = document.getElementById("start-button");
const grid = document.getElementById("grid");

// Dò al bottone l'evento del click per generare la griglia.
button.addEventListener("click", function () {
  gridGenerator(); //** Aggancio alla funzione */
});
