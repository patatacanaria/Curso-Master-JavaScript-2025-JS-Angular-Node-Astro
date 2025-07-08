/* ejercicio 1
var edadperro = prompt("¿que años tienes tu perro?");
var edadreal = edadperro*7;
console.log("Ejercicio 1: Tu perro tiene "+edadreal+" en años humanos")
*/
/* ejercicio 2
var numero1 = prompt("numero 1");
var numero2 = prompt("numero 2");
if ((numero1 && numero2) != typeof(int)){
alert("El valor introducido tiene que ser numerico")
var numero1 = prompt("numero 1");
var numero2 = prompt("numero 2");
}

if (numero1>numero2){
alert("El numero mayor es "+ numero1+ " el numero menor es " + numero2);
} else if (numero1<numero2){
alert("El numero menor es "+ numero1+ " el numero mayor es " + numero2)
} else {
  alert("Los numeros son iguales")
}
*/
/* ejercicio 3

let distanciasalto = 3;
let saltos = 17;

for (let contador=0; contador<=17; contador++){
    console.log("El canguro a echo "+ contador+" saltos y ha recorrido una distancia de "+contador*3);
}
*/
/* ejercicio 5
let sumanumero=0;
var contador = 0; 
let sumatotal=0;
let media = 0;
do{
sumanumero = parseInt(prompt("Introduce un numero"));
sumatotal = sumanumero + sumatotal;
contador ++;
media = sumatotal/ contador;
console.log("La suma del numero con el anterior es "+ sumatotal + " y la media de los numeros es " + media);
}while(sumanumero > 0){
sumanumero = parseInt(prompt("Introduce un numero"));
sumatotal = sumanumero + sumatotal;
contador ++;
media = sumatotal / contador;
console.log("La suma del numero con el anterior es "+ sumatotal + " y la media de los numeros es " + media);
}
*/
/* ejercicio 6
var numerodetabla = parseInt(prompt("Que tabla de multiplicar quieres?"));

for (let contador = 0; contador <= 10; contador++){
console.log(numerodetabla+" * "+ contador+" = "+ numerodetabla*contador);
}

*/
/*Ejericio numero 7, numeros impares de x numero a x numero.
var numerod = parseInt(prompt("que numero quieres evaluar"));
var numeroo = parseInt(prompt("hasta que numero"));

while (numerod < numeroo){
  let resto = numerod % 2;
  if (resto == 1){
  console.log("El numero" + numerod)
  }
  numerod += 1;
}
*/