/*seleciones el parrafo*/
var mi_parrafo = document.querySelector("p");

console.log(mi_parrafo);
console.log(mi_parrafo.id);
console.log(mi_parrafo.name);
console.log(mi_parrafo.tagName);
console.log(mi_parrafo.texcontent);
console.log(mi_parrafo.style);
console.log(mi_parrafo.innerHTML);
//cambiar valores
mi_parrafo.textContent="hola mundo";
mi_parrafo.id="nuevo";