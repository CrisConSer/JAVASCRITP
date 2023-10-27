function saludar(){
  let entrada = document.querySelector('#contenido').value;
  let pulsar = document.querySelector('#boton');
  let cambioNombre = document.querySelector('#nombre');


  cambioNombre.innerHTML = `hola ${entrada}`;
}

function resetear(){
  let entrada = document.querySelector('#contenido');
  let pulsar = document.querySelector('#boton');
  let cambioNombre = document.querySelector('#nombre');

  entrada.value = "";
  cambioNombre.innerHTML = `No sé tu nombre`;
}


