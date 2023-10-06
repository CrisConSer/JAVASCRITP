// ENTRADA Y SALIDA DE DATOS

alert("Hola mundo");
let entrada_datos = prompt("Dime quien eres: ");

//Esto hace que ser vea por la consola del navegador
console.log("te llamas: " + entrada_datos);
console.log(`te llamas ${entrada_datos}`);

//VARIABLES - usaremos let 

let saludar = "decir Hola";
if (true){
  saludar = "adios";
  console.log(saludar);
}
console.log(saludar);

// CONSTANTES
const numero_pi = 3.14;
console.log(numero_pi);

// BOOLEANOS
let variables_boolean_cierto = true;
let variables_boolean_falso = false;

// CONCATENACIÓN E INTERPOLACIÓN DE CADENAS
  // Concatenar
let docente = "Cris Conde";
const curso = "DAW";
let docente_curso = docente + " alumna de " + curso ;
console.log(docente_curso);

  //interpolar
let docente_curso2 = `${docente} alumna de ${curso}`;
console.log(docente_curso2);

//SELECCIONAR ELEMENTOS DEL DOM - modificar el div de html
let cursoDAW = document.getElementById("cursoDAW");
cursoDAW.innerHTML = `
<h2>alumna: ${docente}</h2>
<h3>curso: ${curso}</h3>
`;

//Otra forma de hacer la modificación
let cursoDAW2 = document.querySelector("#cursoDAW2");
cursoDAW2.innerHTML = `
<h2>alumna: ${docente}</h2>
<h3>curso: ${curso}</h3>
`;

// CONDICIONALES

let cursoBD = document.querySelector("#cursoBD");
let existe_cursoBD = true;

if (existe_cursoBD){
  cursoBD.innerHTML = `<h3>Existe curso Big Data</h3>`
}
else {
  cursoBD.innerHTML = "<h3> No existe curso Big Data</h3>"
}

//ACUMULANDO VALORES +=

let inforPTA = document.querySelector("#informacionPTA");
inforPTA.innerHTML = "<h2>Información PTA <h2>";
inforPTA.innerHTML +=`
<h3>Entre los alumnos de campanillas, una de ellas es: ${docente}</h3>
<h3>y entre los cursos que se imparten uno de ellos es: ${curso}</h3>
`
;

// FUNCIONES
function imprimirHTML (contenedor){
 contenedor.innerHTML += mensaje;
}

function imprimirHTML (contenedor){
  inforPTA.innerHTML +=`
  <h3>Entre los alumnos de campanillas, una de ellas es: ${docente}</h3>
  <h3>y entre los cursos que se imparten uno de ellos es: ${curso}</h3>
  `;
 }







