//Selecionar la etiqueta //#endregion
var titulo1=document.querySelector("h1");
console.log(titulo1);

//Registrar el evento al elemento
titulo1.addEventListener("click",function() {
    open("https://www.google.com");
});

/*Seleciones al elemento*/
var parraformostrar = document.querySelector("p#mostrar");
var divcontenido = document.querySelector("#contenido");

console.log(parraformostrar);
console.log(divcontenido);

//Registrar el evento al elemento
parraformostrar.addEventListener("click",function() {
   divcontenido.style.display = alert("kloq wawa");
   divcontenido.style.display = console.log("wawawawa")
   divcontenido.style.display = prompt("digite tu nombre");
  //divcontenido.style.display = document.write(`<p>Darlin regla</p>`);
  divcontenido.textContent = nombre;
   
});