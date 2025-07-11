// DOM - Document object ModeL

// getElementByID -- Seleccionar elementos por ID

let caja = document.getElementById("caja");

console.log(caja);

// .innerHtml -- extraemos el texto/ valor que tiene la variable.

console.log(caja.innerHTML);

// cambiar el texto .innerText 

caja.innerText="Caja de prueba";

// Cambiar texto con formato HTML
 
caja.innerHTML="<h2>Caja de prueba</h2>";

//modificar propiedades de CSS   variable-style-y propiedad que quisieras modificar.

caja.style.background="lightgray";
caja.style.textAlign = "center";

// Añadir una clase de css a un elemento html


// GetlementByCLassname- Seleccionar multiptiples elementos de la misma clase
// Realizamos un recorrido por cada elemento de la clase, y modificamos su style, tambien añadimos un salto de linea.
 let titulos= document.getElementsByClassName("Titulosart");
console.log(titulos);
for (let i = 0; i < titulos.length; i++){
    titulos[i].style.background="lightblue";
     titulos[i].style.textAlign="center";
     titulos[i].innerHTML+="<br/>"
}
// GetElementeByTagName - Funciona igual que ByClassName

// QuerySelector - Seleccionar cualquier tipo de elemento class id etiqueta lo que sea

let articulos = document.querySelectorAll("section .articulo"); // IMPORTANTE seleccionar clase sera .nombreclase identificado #nombreid y etiqueta nombre etiqueta ejemplo article
console.log(articulos);

articulos.forEach(articulo => {
    articulo.style.background="lightyellow";
    articulo.style.textAlign="center";
    articulo.innerHTML += "<br/> Añadimos segunda linea de texo";

});

// tipos de modificaciones

let titulo = document.querySelector("#titulo");

titulo.textContent = "Cambio titulo con textconcent";

titulo.innerHTML = "Cambio titulo con innerHTML";

titulo.setAttribute ("data-id",12);

titulo.style.textAlign = "center";

// añadir clases

titulo.classList.add("añadido");
titulo.classList.remove("añadido");


// BOM Y PARA QUE SIRVE  -- Browser object model
 // alertas dialogo
/* alert();
prompt();
confirm();
*/
// object window

console.log(window); // Objeto window representa ventana del navegador

// Propiedades interesantes

console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.scroll);
console.log(window.navigator); // o

console.log(navigator);

// navigator.onLine   para comprobar que esta en online.

// redirecionar a otra web



// vetanas emergentes o pop ups

// let miweb=window.open("https://www.google.com/","Prueba venta","widht=300,height=100");

// EVENTOS en javascript

// CLICK - DBLCLICK

let boton = document.querySelector("#boton");

boton.addEventListener("click", function(){
alert("has dado click");

});

// Mouse over pasar por encima EL RATON DE UN ELEMENT o mouseout cuando sale. o mosemove cuando nos movemos dentro.

let boton1 = document.querySelector("#boton1");
boton1.addEventListener("mouseover", () => {
alert("has pasado por encima");
})

// Eventos de formulario

//submit Se activa cuando se envia formulario

let formulario = document.querySelector("#iniciosesion");
formulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    let correo = document.querySelector("#email").value;
    let contraseña = document.querySelector("#contraseña").value;
    alert(correo+"  "+contraseña);
});

// ELemento input

let inputnombre = document.querySelector("#email");
inputnombre.addEventListener("input", function(){
console.log(this.value);
})

// elemento change

inputnombre.addEventListener("change", function(){
console.log("has cambiado el valor de email") })

// Elemento focus - cuando entras dentro de elemento de input ejemplo

inputnombre.addEventListener("focus", function(){

console.log("has entrado al email ") })

//Elemento blur - se captura cuando sales del campo de un elemento input ejemplo para verificar si es correcto el formato

inputnombre.addEventListener("blur", function(){
    inputnombre.style.border="5px solid green";
    
    console.log("has salido del email") })

    // dejar de escuchar eventos

    setTimeout(()=>{
    inputnombre.removeEventListener("focus","Funcion a eliminar");
    }, 10000
    )

     // Propagacion de eventos

     event.stopPropagation();