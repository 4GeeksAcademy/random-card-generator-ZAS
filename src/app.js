/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  //objeto que almacena palo y respectivo color
  const palosPosibles = [
    { palo: "♦", color: "red" },
    { palo: "♥", color: "red" },
    { palo: "♠", color: "black" },
    { palo: "♣", color: "black" }
  ];

  // array con los posibles valores de la carta
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  const paloArriba = document.querySelector("#paloArriba"); // almacena lo q va a haber dentro del palo arrriba
  const paloAbajo = document.querySelector("#paloAbajo"); // almacena lo q va a haber dentro del palo abajo
  const numeros = document.querySelector("#numero"); // alamcena lo q va a haber dentro del palo abajo
  const boton = document.querySelector("#boton"); // almacena el botón
  let intervaloId = 0;
  const countDown = document.querySelector("#cuentaAtras1");
  console.log(countDown);

  const nuevaCarta = () => {
    const paloAleatorio =
      palosPosibles[Math.floor(Math.random() * palosPosibles.length)];

    const numeroAleatorio = valores[Math.floor(Math.random() * valores.length)];

    mostrarCarta(paloAleatorio, numeroAleatorio);

    if (intervaloId) {
      clearInterval(intervaloId);
    }
    intervaloId = nuevoIntervalo();
  };

  const mostrarCarta = (paloAleatorio, numeroAleatorio) => {
    paloArriba.textContent = paloAleatorio.palo;
    paloAbajo.textContent = paloAleatorio.palo;
    numeros.textContent = numeroAleatorio;
    numeros.style.color = paloAleatorio.color;
    paloArriba.style.color = paloAleatorio.color;
    paloAbajo.style.color = paloAleatorio.color;
  };
  nuevaCarta();

  boton.addEventListener("click", nuevaCarta);

  function nuevoIntervalo() {
    let contador = 10;

    let cuentaAtras = setInterval(function() {
      if (contador === 0) {
        clearInterval(cuentaAtras);
        nuevaCarta();
      } else {
        contador--;
        countDown.textContent = contador;
      }
    }, 1000);

    countDown.innerHTML = `<p class="cuentaAtras text-white mt-5 d-flex justify-content-center"></p> `;

    return cuentaAtras;
  }
};
