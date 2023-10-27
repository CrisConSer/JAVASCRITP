const carrito = [
  {nombre: 'TV', precio:500},
  {nombre: 'lavadora', precio:600},
  {nombre: 'reloj', precio:1000},
  {nombre: 'micro', precio:300},
]

let elemento;

// Realizar bucle for usando break y continue

for (let i = 0; i < carrito.length; i++){
  elemento = carrito[i].nombre;
  precio = carrito[i].precio;
  if (elemento == "reloj") break;
  if (elemento.toLocaleLowerCase().includes("micro"))continue;
  console.log(elemento + " vale: " + precio);
}
  

