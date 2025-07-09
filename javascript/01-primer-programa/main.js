 
/**
 * Este archivo contiene ejemplos básicos de sintaxis y estructuras en JavaScript:
 * 
 * - Comentarios de una y varias líneas.
 * - Uso de alertas, consola y ventanas emergentes.
 * - Declaración de variables con `var`, `let` y `const`.
 * - Tipos de datos: string, number, boolean, undefined, null, array, objeto.
 * - Operadores: aritméticos, asignación, comparación, lógicos, incremento y decremento.
 * - Estructuras de control: if, else, else if, switch, operador ternario.
 * - Bucles: for, while, do...while.
 * - Funciones: declaración, parámetros, valores por defecto, funciones anidadas, funciones anónimas, arrow functions.
 * - Parámetros rest y spread.
 * - Métodos de texto: length, toString, toUpperCase, toLowerCase, charAt, includes, indexOf, slice, replace, trim, split, concat, startsWith, endsWith, repeat.
 * - Arrays: declaración, acceso por índice.
 * 
 * Ejemplos prácticos y comentarios explicativos acompañan cada bloque de código para facilitar el entendimiento.
 */
 // Comentarios de texto;


/*  
Comentario multilinea
*/

 alert("Hola que tal mensaje de prueba ");
 console.log("Primer mensaje enviado a consola js");

 /*  
 Variables javascript
-------------------------------------------------------
 TIPOS DE DECLARAR->
 var nombre = "eduardo belda";  uso  Libre
 let apellido = "belda";        valor de bloque
 const nacionalidad = "española";  valor fijo 
-------------------------------------------------------
 TIPOS DE DATOS;  
 let frase = "hola soy"; Tipo de datos string o cadena de texto
 let anios = 20 ; Valor numerico entero int
 let intereses = 2.7; valor numero decimal Float o double
 let mayoredad = True ; Dato verdadero o falso - Booleano;
 let vacia; Undefenied valor indefenido;
 let null = null; Valor nulo vacio - null
 let alummnos = ["Eduardo","jose","arturo"] ; Array una variable con varios arrays dentros;
 let heroe = {nombre:"batman", universo : "DC"} Objeto.
-------------------------------------------------------
 */
/*  
TIPOS DE OPERADORES:
Operador de tipo = typeof;
Permite ver el tipo de dato de una variable
*/
const dni = "45362365v";
console.log(typeof dni); // Prueba typeof, devuelve el tipo de dato.
 let nombre = "eduardo";
 let trabajo = "programador";
 let edad = 26;
 let nombreytrabajo = nombre + " es " + trabajo;

 /*
 -----------------------
 OPERADORES ARITMETICOS
 Suma = +
 resta = -
 division = /
 multiplicacion = * 
 resto de una divison = %
 potencias de un numero = ** 
------------------------
 ASIGNACION
 *= multiplicar
 /= dividir
 +/ sumar 
 -/ restar
 -----------------------
 COMPARACION
 igualdad es ==    "no es estricto al 100% un int y un string si valen lo mismo entendera por igual, se fija en el valor en si"
 igualdad exacta ignorando el tipo de dato === 
 no es igual !=
 no es igual y tampco en tipo de dato !==
 < menor que
 =< menor o igual
 > mayor que
 >= mayor o igual
------------------------
 LOGICOS
y and, = && evalua dos condiciones si son verdaderas las dos->
o = || evalua dos condiciones con que una se cumpla->
operador ! , comprueba sino existe 
 
 INCREMENTO Y DECREMENTO
let cifra = 1200; incremento -> cifra++ le suma 1 ->  1201
let cifra = 1200; decremento -> cifra-- le resta 1 -> 1199
 */
 
// IF CONDICIONES Estructura

if ("CONDICION"){
// CODIGO A EJECUTAR SI CUMPLE CONDICION
}
// else {} Sino se cumple la anterior condicion se ejecuta esta otra
if ("CONDICION"){
// CODIGO A EJECUTAR SI CUMPLE CONDICION
}else{
    // Codigo a ejecutar si IF no se cumple
}

//usando ELSE IF
if ("CONDICION"){
// CODIGO A EJECUTAR SI CUMPLE CONDICION
}
// else if  {} Sino se cumple la anterior evalua esta condicion
else if ("CONDICION"){
// CODIGO A EJECUTAR SI CUMPLE CONDICION
}else{
    // Codigo a ejecutar si ningun IF no se cumple
}

// CONDICIONAL SWITCH 
var DESAYUNO = 3;

switch (DESAYUNO){
// escogera un case dependiendo del valor 
case 1: console.log("desayuno 1 escodigo"); break;
case 2: console.log("desayuno 2 escodigo"); break;
case 3: console.log("desayuno 3 escodigo"); break;
// Si ninguna opcion es escogida por defecto se cojera default.
default: console.log ("Desayuno por defecto"); break;
}

//CONDICIONAL TERNARIO 
let NOMBRE = "JOSE ALBERTO";
let edadd = 15;
let resultado = (edadd>18) ? "Es mayor de 18 años" : "no es mayor de 18";
console.log(resultado);

// BUCLES FOR ESTRUCTURA
let numero = 177;
for (let contador = 0; contador < numero; contador++){
    console.log (contador);
}
// bucle while
while(numero<188){
    numero++;
    console.log(numero); // RECORDAR BREAK PARA PARAR BUCLE
}
// DO WHILE - ES UN WHILE PERO SIEMPRE SE EJECUTARA UNA VEZ AUNQUE NO CUMPLA CONDICION
do { }
while(numero<188);{
    numero++;
    console.log(numero); }// RECORDAR BREAK PARA PARAR BUCLE
// DO WHIL

// VENTANAS Y ALERTAS;
// ALERT -- MENSAJE EN VENTANA ENTRANTE
// METODO CONFIRM PARA ACEPTAR O CONTINUAR EN VENTANA EMERGENTE.  VARIABLE = CONFIRM("PREGUNTA");
// METODO PROMPT PARA INTRODUCIR DATOS AL FORMULARIO. VARIBLE = PROMPT ("pREGUNTA QUE RESPONDER");

// FUNCIONES

function ejemplo() {
    console.log("HOLA");
    return; // devolver datos. Extraer variables demas.
}
//llamar funcion
ejemplo();
let returnvalor = ejemplo(); // declarar un valor de una funcion
// funciones con parametros
function ejemplo1(nombre,plato){
var total = nombre+plato;
return total;
}
var mostrar=ejemplo1("carmen","perrito caliente");
console.log(mostrar);
// Parametro opcional  
function ejemplo2(nombre,plato=2){
// pudiendo sustituir los datos pr valores de entrada en ejemplo("eduardo",4)
}

//Funciones dentro de funciones
function calculadora() {
    function suma(numeroo1, numeroo2) {
        return numeroo1 + numeroo2;
    }
    function resta(numeroo1, numeroo2) {
        return numeroo1 - numeroo2;
    }
    function division(numeroo1, numeroo2) {
        return numeroo1 / numeroo2;
    }
    function multiplicacion(numeroo1, numeroo2) {
        return numeroo1 * numeroo2;
    }

    return {
        suma,
        resta,
        division,
        multiplicacion
    };
}

const miCalculadora = calculadora();
const resultadoo = miCalculadora.suma(2, 2);
console.log(document.write("<h2>"+resultadoo+"</h2>"));

// PARAMETROS ...REST
function misPeliculas(pelicula1,pelicula2,...restopeliculas){
   console.log(pelicula1);
   console.log(pelicula2);
   console.log(restopeliculas[0]);
}
misPeliculas("SOD","Rambo","la noche oscura","jurasic park");

// METODO SPREAD

let numerops = [1,2,4,5];
let numerosp = [2,4,1,5,5];
let mispelisfa= ["el señor", "la parca"];
misPeliculas(...mispelisfa,"resto de pliculas");

// FUNCIONES ANONIMAS: ES UNA FUNCION "SIN NOMBRE"

const validar = function (){
};

//funcion set interval; Ejecuta funcion anonima cada x sec declarados ejemplo:
setInterval(function() {
    // Funcion o codigo que se queire ejecutar cada 2000milisegundos
}, 2000);
// Ambito de la variables " scope" 
// Global inicilizada fuera de cualquier o bloque, codigo base se puede hacer desde cualquier sitio--

// Funcion anonima inicializada con => ejemplo
let nuevocurso = (parametros) => {
console.log()
};

//FUNCIONES DE TEXTO:
// ESTAN ECHAS POR DEFECTO. 
// LOGINTUD DE CARACTERES
var ejemplosdetexto = "paco gnzales";
var numeroej = 1231;

ejemplosdetexto.length;

// Conversion a texto

numeroej.toString;

// Texto a mayusculas

ejemplosdetexto.toUpperCase;

// Texto a minusculas

ejemplosdetexto.toLocaleLowerCase

// Encntrar letra concreta

ejemplosdetexto.charAt(2-4); // entre la posicion 2 y 4 

// Comprobar si una cadena tiene dentro otra

ejemplosdetexto.includes("paco");

// Buscar posicion de una palabra  --> devuelve la posicion en la que empieza la cadena introducida

ejemplosdetexto.indexOf("paco");

// Extraer parte de un texto ---> desde la posicion fijada

ejemplosdetexto.slice(0,5); // o desde el que queramos hasta el final.

// Reemplazar una palabra por otra

ejemplosdetexto.replace("paco", "eduardo");

// Eliminar espacios por delante y por detras cadena de texto.

ejemplosdetexto.trim;

// Separar una cadena de texto y convertirla a un array. EL parametro es el tupo de separador.

ejemplosdetexto.split(" ");

// Concatenar cadenas de texo
var añadir= "soy "

//r frasefinal = concat(añadir+frasefinal);

// Comienza por una palabra especifica

ejemplosdetexto.startsWith("paco");

// Acaba por una palabra especifica

ejemplosdetexto.endsWith("paco");

// repetir palabras

ejemplosdetexto.repeat(2);

// ARRAYS - iNDICE - EN ORDEN DE 0 ARRIBA

// ESTRUCTURA

let ejemploarray = ["Eduardo","paco","jose","Tomas"];

        //indice       0        1       2      3

// Referirse a un elmento de array

ejemploarray[1];

let ejemploarray1 =["Eduardo","paco","jose","Tomas", "arturo", "maria", "carmen"];

// acceso con bluces for

for(let i = 0; i < ejemploarray1.length; i++) {
    console.log(ejemploarray1[i]);  
}

// bucle for of -- Recorre todos los elementos de un array o string -- nombre sera la variable que almacena cada elemento del array en cada iteracion
for (let nombre of ejemploarray1) {
    console.log(nombre);
}
// bucle for in -- Recorre los indices de un array o las propiedades de un objeto -- nombre sera la variable que almacena cada indice del array en cada iteracion
for (let nombre in ejemploarray1) {
    console.log(ejemploarray1[nombre]);
}
// bucle forEach -- Recorre todos los elementos de un array y ejecuta una funcion para cada uno de ellos -- nombre sera la variable que almacena cada elemento del array en cada iteracion
ejemploarray1.forEach(function(nombre,indice) {
    console.log(nombre, indice);
}); 
// bucle map -- Crea un nuevo array con los resultados de la llamada a la funcion proporcionada aplicada a cada elemento del array -- nombre sera la variable que almacena cada elemento del array en cada iteracion
let nuevoArray = ejemploarray1.map(function(nombre) {
    return nombre.toUpperCase();
}  );        
console.log(nuevoArray);     