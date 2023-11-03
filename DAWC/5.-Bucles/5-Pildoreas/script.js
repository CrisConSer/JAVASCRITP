// REPASAR LOS TIMES CON FUNCIONES FLECHAS


// PRIMER NIVEL
setTimeout(saludar(),1000);
function saludar(){
    alert("hola mundo");
}

// SEGUNDO NIVEL 
setTimeout(function(){
  alert("funcion anónima")
},3000);

//ARROW FUNCTIONS
setTimeout(() => {
  alert ("funciones flecha");
},1000);
