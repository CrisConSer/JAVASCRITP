//Obtenemos el DOM del HTML

var nombreCoche = document.getElementById("nombreCoches");
var Enviar = document.getElementById("Enviar");
var number = document.getElementById("number");


const listado_coches = [
  {nombre : "Renault", precio: 21.000},
  {nombre : "Seat", precio: 35.000},
  {nombre : "BMW", precio: 51.000},
  {nombre : "Mercedes", precio: 39.500},
  {nombre : "Ford", precio: 15.000},
  {nombre : "Kia", precio: 23.000},
  {nombre : "Opel", precio: 19.200},
  {nombre : "Tesla", precio: 71.000},
]
// Definir los eventos de cada elemento

nombreCoches.addEventListener("click", () => {
  var boton1 = parseInt(document.getElementById("nombreCoches").value);
  nombres(boton1);
});



// Definimos las funciones
function precesarMarcas (){
  reset();
  let valor = nombreCoche.value;
  if (isEmpty(valor)){
      precio.textContent = "no has introducido nada";
  }else{
    boton3.value=
  }

  
}
function procesarPrecio(){
  reset();
  let valor = marca.value;
  if (isEmpty(valor)){
      precio.textContent = "no has introducido nada";
  }
  else{
      precio.textContent = valorMarca(valor);
  }
}


function reset(){
  boton1.value=0;
  boton2.value=0;
  boton3.value=0;
}