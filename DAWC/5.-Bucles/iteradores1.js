// Bucle for para iterar con arrays de objetos

const carrito = [
  {nombre: 'TV', precio:500},
  {nombre: 'lavadora', precio:600},
  {nombre: 'reloj', precio:1000},
  {nombre: 'micro', precio:300},
]

console.table(carrito);

for(let i = 0; i < carrito.length; i++){
  console.log(carrito[i].nombre);
}

// Bucle con Do while

const carrito2 = [
  {nombre: 'TV', precio:500},
  {nombre: 'lavadora', precio:600},
  {nombre: 'reloj', precio:1000},
  {nombre: 'micro', precio:300},
];

let i=0;

do{
  console.log(carrito2[i].nombre);
  i++;
}while (i<carrito2.length);


//Bucle con while

console.table(carrito3);

function mostrarcarrito_while(){
let j = 0;

while (j<carrito3.length){
  console.log(carrito3[j].nombre);
  j++
}
};

