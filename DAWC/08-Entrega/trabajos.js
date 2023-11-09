/*
Realizar programa para que al enviar la profesión mediante un input
nos diga el sueldo que cobra en el output
*/

document.addEventListener('DOMContentLoaded', function() {
  var enviar = document.getElementById('enviar');
  var precio = document.getElementById('precio');

  enviar.addEventListener('click', function(event) {
    event.preventDefault();
    var trabajo = document.getElementById('nombre').value;
    funPrecio(trabajo);
  });

  function funPrecio(trabajo) {
    switch (trabajo) {
      case 'dba job':
        precio.value = 70000;
        break;
      case 'front-end developer':
        precio.value = 450000;
        break;
      case 'back-end developer':
        precio.value = 50000;
        break;
      default:
        if (trabajo == '') {
          reset();
        } else {
          precio.value = 'De esta profesión no tenemos datos';
        }
    }
  }

  function reset() {
    alert('Introduce una profesión');
  }
});
