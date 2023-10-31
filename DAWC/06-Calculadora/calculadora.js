//Obtenemos el DOM del HTML

var suma = document.getElementById("suma");
var multiplicacion = document.getElementById("multiplicacion");
var division = document.getElementById("division");
var raiz = document.getElementById("raiz");
var potencia = document.getElementById("potencia");
var absoluto = document.getElementById("absoluto");
var boton3 = document.getElementById("boton3");

// Definir los eventos de cada elemento

suma.addEventListener("click", () => {
  var boton1 = parseInt(document.getElementById("boton1").value);
  var boton2 = parseInt(document.getElementById("boton2").value);
  sumar(boton1,boton2);
});

// Funciones

function sumar(num1, num2){
  if((num1 && num2)){
    var resultado1= num1 + num2;
    boton3.value=resultado1;
  }
}




