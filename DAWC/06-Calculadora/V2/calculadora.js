/*
document.querySelector('.operador').addEventListener('click', () => {
  console.log('operador');
  });*/

  document.querySelector('.operador').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      const num1 = parseFloat(document.getElementById('boton1').value);
      const num2 = parseFloat(document.getElementById('boton2').value);
      let resultado;
  
      switch (event.target.id) {
        case 'suma':
          resultado = num1 + num2;
          break;
        case 'resta':
          resultado = num1 - num2;
          break;
        case 'multiplicacion':
          resultado = num1 * num2;
          break;
        case 'division':
          resultado = num2 !== 0 ? num1 / num2 : 'Error: División por cero';
          break;
        // Agrega más casos según tus necesidades
      }
  
      if (typeof resultado !== 'undefined') {
        document.getElementById('boton3').value = resultado;
      }
    }
  });
  
