//Obtenemos el DOM del HTML

var suma = document.getElementById("suma");
var multiplicacion = document.getElementById("multiplicacion");
var division = document.getElementById("division");
var raiz = document.getElementById("raiz");
var potencia = document.getElementById("potencia");
var absoluto = document.getElementById("absoluto");
var boton3 = document.getElementById("boton3");
var boton4 = document.getElementById("boton4");
var boton5 = document.getElementById("boton5");
var boton6 = document.getElementById("boton6");
var reset = document.getElementById("reset");


// Definir los eventos de cada elemento

suma.addEventListener("click", () => {
  var boton1 = parseInt(document.getElementById("boton1").value);
  var boton2 = parseInt(document.getElementById("boton2").value);
  sumar(boton1,boton2);
});

resta.addEventListener("click", () => {
  var boton1 = parseInt(document.getElementById("boton1").value);
  var boton2 = parseInt(document.getElementById("boton2").value);
  restar(boton1,boton2);
});

multiplicacion.addEventListener("click", () => {
  var boton1 = parseInt(document.getElementById("boton1").value);
  var boton2 = parseInt(document.getElementById("boton2").value);
  multiplicar(boton1,boton2);
});

division.addEventListener("click", () => {
  var boton1 = parseInt(document.getElementById("boton1").value);
  var boton2 = parseInt(document.getElementById("boton2").value);
  dividir(boton1,boton2);
});

raiz.addEventListener("click", () => {
  var boton1 = parseInt(document.getElementById("boton1").value);
  raizCuadrada(boton1);
});

potencia.addEventListener("click", () => {
  var boton1 = parseInt(document.getElementById("boton1").value);
  var boton2 = parseInt(document.getElementById("boton2").value);
  funPotencia(boton1,boton2);
});

absoluto.addEventListener("click", () => {
  var boton1 = parseInt(document.getElementById("boton1").value);
  funAbsoluto(boton1);
});

reset.addEventListener("click", () => {
  var boton1 = parseInt(document.getElementById("boton1").value);
  resetear(reset);
});



// Funciones
function sumar(num1, num2){
  if((num1 && num2)){
    var resultado1= num1 + num2;
    boton3.value=resultado1;
  };
};

function restar(num1,num2){
  if(num1 && num2){
    var resultado1 = num1 - num2;
    boton3.value=resultado1;
  };
};

function multiplicar(num1,num2){
  if(num1 && num2){
    var resultado1 = num1 * num2;
    boton3.value=resultado1;
  };
};

function dividir(num1,num2){
  if(num1 && num2){
    var resultado1 = num1 / num2;
    boton3.value=resultado1;
  };
};

function raizCuadrada(num1){
  if(num1){
    var resultado1 = Math.sqrt(num1); ;
    boton4.value=resultado1;
  };
};

function funPotencia(num1,num2){
  if(num1&&num2){
    var resultado1 = Math.pow(num1,num2); ;
    boton5.value=resultado1;
  };
};

function funAbsoluto(num1){
  if(num1){
    var resultado1 = Math.abs(num1); ;
    boton6.value=resultado1;
  };
};


function resetear (){
  boton1.value = "";
  boton2.value = "";
  boton3.value = "";
  boton4.value = "";
  boton5.value = "";
  boton6.value = "";
};


