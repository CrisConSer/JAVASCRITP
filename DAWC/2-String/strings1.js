// FORMAS DE DECLARAR UN STRING

let producto1 = "mnonitor 20 pulgadas";
let producto2 = String ("monitor de 24 pulgadas");
let producto3 = new String("monitor de 24 pulgadas");

console.log(producto1);
console.log(producto2);
console.log(producto3);

//Ahora vamos a ver una de las utilidades de usar comillas simples
producto1 = 'monitor 20" ';
console.log(producto1);

//Ahora vamos a ver una forma de usar un doble comillas dentro de otro dobles comillas, con el escape
producto1="monitor 20\" ";
console.log(producto1); 

// Ahora vamos a usar la propiedad lenght
console.log(producto1.length);

//método incluide
console.log(producto1.includes("monitor"));
console.log(producto1.includes("Monitor"));
console.log(producto1.includes("mono"));

//método indexof
console.log(producto2.indexOf("p"));
console.log(producto2.indexOf("m"));
console.log(producto2.indexOf("2"));
console.log(producto2.indexOf("z"));

// concatenacion de strings
let precio = "40 €";
console.log(correo);

console.log("el producto " + producto2 + " cuesta: " + precio);
console.log("el producto " , producto2 ,  " cuesta: " , precio);

// templaete string

console.log(`el producto ${producto2} cuesta: ${precio}`);

//Eliminar espacios en blanco

let correo = " lala@gmail.com ";
console.log(correo);

console.log(correo.trimStart());
console.log(correo.trimEnd());

console.log(correo.trimStart().trimEnd());

console.log(correo.trim());

// Reemplazar 

let frase = "Erase una vez";

// Replace para reemplazar
console.log(frase.replace("Erase","Solo"));

//Recortar Slide o substring
console.log(frase.substring(2));
console.log(frase.substring(6,9));

//Recortar un solo caracter
console.log(frase.charAt(6));
console.log(frase.substring(6,7));

//repeat
let coche = "daw, dam, asir";
console.log(ciclos.split(","));

//conversión a mayus / minus
let correo2 = "CORREO@GMAIL.COM";
console.log(correo.toLocaleLowerCase());

let nombre = "Estefi";
console.log(nombre.toUpperCase());

//conversión a string
let precio2 = 300;
console.log(precio.toString());






