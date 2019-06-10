//Selecionar los elemento
var correo = document.querySelector("input#correo");
var contrasena = document.querySelector("input#contrasena");
var div = document.querySelector("div#contenido");
var iniciar = document.querySelector("button#iniciar");

console.log(correo);
console.log(contrasena);
// prompt("tu datos");
//Agregar el evento al elemento
correo.addEventListener("keyup",function(){
    
    div.textContent = correo.value;


    
});

//Agregar el evento al elemento
correo.addEventListener("blur", function () {

    
});
 
 //Agraga elemento click
 iniciar.addEventListener("click", function(){
     div.textContent =
      `bienvenido ${correo.value}`;
 })