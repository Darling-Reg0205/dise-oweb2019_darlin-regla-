// alert("hola a todos!");

/*soy un
comentario
multilinea*/

//soy un comentario de 1 sola linea

//perdi al usuario que digite su nombre
var nombre = prompt("digite su nombre");
var edad = prompt("digite su edad");
var ciudad = prompt("de donde eres");
var tarjeta = prompt("digite la tarjeta de credito");

console.log(nombre);
console.log(edad);
console.log(ciudad);
console.log(tarjeta);

document.write(nombre);
document.write(edad);
document.write(ciudad );
document.write(tarjeta);

console.log(document.documentURI);
console.log(document.body)
console.log(document.head)
console.log(document.height)
console.log(document.URL)
console.log(document.title)

//Esta variable no esta definida
var pais;
console.log(pais);

var pais = "Rep.Dom";
console.log(pais);
//cambiar el titulo
document.title = "nuevo titulo"