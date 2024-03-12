var pantalla = document.getElementById("pantalla");
var numeroActual = "";
var operador = "";
var numeroAnterior = "";

function agregarNumero(num) {
  numeroActual += num;
  actualizarPantalla();
}

function agregarOperador(op) {
  if (numeroActual !== "") {
    operador = op;
    numeroAnterior = numeroActual;
    numeroActual = "";
    actualizarPantalla();
  }
}

function borrar() {
  numeroActual = "";
  operador = "";
  numeroAnterior = "";
  actualizarPantalla();
}

function calcular() {
  if (numeroActual !== "" && numeroAnterior !== "") {
    var resultado = realizarOperacion(
      parseFloat(numeroAnterior),
      parseFloat(numeroActual),
      operador
    );
    numeroActual = resultado.toString();
    operador = "";
    numeroAnterior = "";
    actualizarPantalla();
  }
}

function realizarOperacion(num1, num2, op) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return num2;
  }
}

function actualizarPantalla() {
  pantalla.value = numeroActual;
}