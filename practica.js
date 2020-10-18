/* var country = prompt("Hola, por favor ingresa de que pais sos");
alert("Tu pais es " + country); */

/* var number1 = Number(prompt("ingresa el primer numero "));
var numb100er2 = Number(prompt("ingresa el segundo numero"));

var suma = number1 + number2;
var resta = number1 - number2;
var multiplicacion = number1 * number2;

alert(" la suma de los numero es " + suma);
alert("la resta de los numeros es igual a " + resta);
alert(" la multriplicacion de los numeros es igual a " + multiplicacion);
 */

/* var nacionalidad = prompt("sos argentine ?");

if (nacionalidad === "si" ) {
  alert("sos argentino!");
}  
 else   {
     nacionalidad = prompt("sos venezonalo? ")
     if (nacionalidad === "si")
     {
         alert("sos venezolano ")
     }
else{
    alert ("no te conozco")
}
 } */
/* 
 var name;
 name = prompt("Cual es tu nombre ?");

 switch (name){
     case "facundo":
         alert("Hola facu");
         break;
         case "pepe":
             alert("Hola pepe como estas");
             break;
             default:
                 alert("Disculpa no te conozco");
          
 } */
/*  var a = parseInt(prompt("Ingresa el primer numero"));
  var b = parseInt(prompt("ingrese el segundo numero "));

function suma(a,b) {
  

  var resultado = a + b;
  alert("el resultado es " + resultado);
}

suma(a,b); */

/* confirm("abandonas?"); */

//  ----------------------------------------------PRACTICA 1 CONDICIONALES  ----------------------------------------------
/* var resultado;
function suma() {
  resultado = number1 + number2;

  alert("el resultado de la suma es " + resultado);


  if (resultado > 50) {
    alert("el resultado de la suma es mayor a 50 ");
  } else if (resultado < 50) {
    alert("el resultado de la suma es menor a 50 ");
  } else {
    alert("el resultado es igual a 50");
  }

  if (resultado %2== 0){
    alert("el numero ademas es par");

  }else {
    alert("el numero es impar");
  }

  if (number1 > number2){
    alert("El primer numero fue mayor que el segundo");

  }else{
    alert("el segundo numero fue mayor que el primero  ");

  }


}

var number1 = Number(prompt("ingrese el primer numero de la suma"));
var number2 = Number(prompt("ingrese el segundo numero de la suma"));

suma();
  */

//  ----------------------------------------------PRACTICA 2 VARIABLES Y DATOS PRIMITIVOS  ----------------------------------------------
/*---------------------- PROMANDO COMENTARIO DE SNIPPET ---------------------*/

/* let nombre = "facundo";
console.log(nombre);  

nombre = "fernando";

for(var i=0 ; i == false; ){

  let pass1 = prompt("que colegio fuiste?");
  let pass2 = prompt("mes de nacimiento?");
  let pass3 = prompt("nombr de pila de tu madre?");

  if (pass1 == "republica" && pass2 == "junio" && pass3=="graciela"){
    i=6;
  }else{
    i=false; }
 */

/*---------------------- NUMERO ALEATORIOS ---------------------*/
//El método floor () redondea un número HACIA ABAJO al entero más cercano y devuelve el resultado.Si el argumento pasado es un entero, el valor no se redondeará.
//Math.random() devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusivo):
/* let numberzero = 0,
  numberone = 0,
  numbertwo = 0;
for (i = 0; i < 100; i++) {
  let number = Math.floor(Math.random() * 3);
  console.log(number);
  if (number == 0) {
    numberzero++;
  } else if (number == 1) {
    numberone++;
  } else {
    numbertwo++;
  }
}

console.log("el numero 0 salio " + numberzero + " veces");
console.log("el numero 1 salio " + numberone + " veces");
console.log("el numero 2 salio " + numbertwo + " veces");

let randomFloor = Math.floor(3, 9); //devuelve 3 porque es el entero mas cercado (redondeado para abajo)
console.log({ randomFloor }); */

/*---------------------- PIEDRA PAPEN O TIJERA ---------------------*/

/* 
function jugar() {
  let options = ["piedra", "papel", "tijera"]; //declaro array de 3 elelementos
let userChoise = prompt("elige piedra papel o tijera para jugar");
  let pcOption = options[Math.floor(Math.random() * 3)]; // genero opcion aleatoria para la maquina 
  let conditional = true; // condicinal para retornar la funcion en caso de que se introduzca un valor incorrecto

  if (pcOption == options[0] && userChoise === options[1]) { // condicionales para mostrar resultados los [] encierran el indixe que representa el valor del array empiezan del 0
    console.log("%c la maquina elijio piedra , le has ganado con papel", "font-size:2rem; color:tomato");
  } else if (pcOption === options[0] && userChoise === options[2]) {
    console.log("%c has perdido contra la maquina porque tenia la piedra", "font-size:2rem; color:tomato");
  } else if (pcOption === options[0] && userChoise === options[0]) {
    console.log("%c Empate de piedras" ,"font-size:2rem ; color:tomato");
  } else if (pcOption === options[1] && userChoise === options[0]) {
    console.log("%c has perdido contra la maquina porque tenia la papel", "font-size:2rem; color:tomato");
  } else if (pcOption === options[1] && userChoise === options[1]) {
    console.log("%c Empate de papeles " ,"font-size:2rem ; color:tomato");
  } else if (pcOption === options[1] && userChoise === options[2]) {
    console.log("%c la maquina elijio papel , le has ganado con tijera", "font-size:2rem; color:tomato");
  } else if (pcOption === options[2] && userChoise === options[0]) {
    console.log("%c la maquina elijio tijera , le has ganado con piedra", "font-size:2rem; color:tomato");
  } else if (pcOption === options[2] && userChoise === options[1]) {
    console.log("%c la maquina elijio tijera , has perdido porque tenias papel", "font-size:2rem; color:tomato");
  } else if (pcOption === options[2] && userChoise === options[2]) {
    console.log("%c Empate de tijeras", "font-size:2rem; color:tomato");
  }else{                                                                // caso de valor por fuera de las posibilidades retorna la funcion misma
    alert("no has introducido un valor correcto vuelve a intentarlo");
    jugar();
    conditional =false;
    
  }
   if (conditional ) {                            // si condicional mantiene su true muestra resultado
      console.log({userChoise} , {pcOption} ) }
   
}

jugar(); */

/*---------------------- PIEDRA PAPEL O TIJERA CON SWITCH ---------------------*/

/* let options = ["piedra", "papel", "tijera"];

let choiseMachine = options[Math.floor(Math.random() * 3)];

let userOk;

function jugar(userOk) {
  switch (userOk) {
    case "papel":
      choiseMachine === "piedra"
        ? console.log("has ganado contra piedra")
        : console.log("has perdido contra tijera");
      break;

    case "piedra":
      choiseMachine === "papel"
        ? console.log("has perdido contra papel")
        : console.log("has ganado contra tijera");
      break;

    case "tijera":
      choiseMachine == "piedra"
        ? console.log("has perdido contra piedra")
        : console.log("has ganado contra papel");
      break;

    default:
  }
  console.log({ userOk }, { choiseMachine });
}
function validation() {
  userOk = prompt("ingrese piedra papel o tijera para jugar contra la maquina");
  if (choiseMachine === userOk) {
    console.log("HAN EMPATADO!!! CON " + userOk);
  } else if (
    userOk === 'piedra' ||
    userOk === 'papel'||
    userOk === 'tijera'
  ) {
    jugar(userOk);
  } else {
    alert("No has introducido un valor correcto vuelve a intentarlo");
    validation();
  }
}

validation(); */

/*---------------------- PRACTICA CON ARREGLOS ---------------------*/

/* let lengthArray =Number(prompt('ingrese la cantidad de animales que quiere comprar'));
let animals = [];
for ( i= 0 ; i<lengthArray ;i++){
animals.push(prompt('ingrese animal'));

}

console.log({animals});

animals.shift();
  */

/*----------------------Ejercicios notas y usuario PRACTICA 3 ---------------------*/
/* 
let users = [
  {
    userName: "john",
    password: "123456",
  },
  {
    userName: "nicol",
    password: "ninini",
  },
];

let notes = [
  {
    name: "john",
    note: "8",
  },
  {
    name: "nicol",
    note: "5",
  },
];

function validate() {
  let userName = prompt("ingrese su nombre de usuario");
  let password = prompt("ingrese su contraseña");
  let valid = true;
  for (i = 0; i < users.length; i++) {
    if (userName === users[i].userName && users[i].password === password) {
      console.log("Su nota es", notes[i].note);
      valid = false;
    }
  }
  if (valid) {
    alert(
      "DATOS INCORRECTO!! vuelva a ingresar usuario y contraseña para ver su nota"
    );
    validate();
  }
}

validate(); */

/*---------------------- PRACTICA N 5 FOR OF ARRAY---------------------*/
//ingreso cantidad de nombres , ingreso nombres en el array, pregunto que nombre quiero buscar y muestro si esta en la lista o no

/* let nombres = [];
let cantidadNombres = Number(prompt("Ingrese la cantidad de nombres"));

function ingresoNombres(cantidad) {
  for (i = 1; i < cantidadNombres + 1; i++) {
    nombres.push(prompt("Ingrese nombre n°" + i));
  }
}

function buscar(nombre) {
  let i = true;
  for (let nombrebuscado of nombres) {
    if (nombre === nombrebuscado) {
      console.log(nombre + " se encuentra en la lista de nombres!");
      i = false;
      break;
    }
  }
  if (i) {
    console.log(nombre + " no se encuentra en la lista");
  }
}

ingresoNombres(cantidadNombres);
let nombrebuscad = prompt("ingrese el nombre que desea buscar");
buscar(nombrebuscad);
 */

/*---------------------- PRACTICA 6 INGRESO DE NUMEROS PROMEDIO NUMERO MAXIMO Y CANTIDAD DE PARES ---------------------*/
/* let pair = 0;
let sum = 0;
let max = 0;
let quantity = Number(
  prompt("ingrese cantidad de numeros para hacer el promedio")
);
for (i = 1; i <= quantity; i++) {
  let maxiNum = 0;
  let suma = 0;
  suma = maxiNum = Number(prompt("ingrese numero n°" + i));
  sum += suma;
  if (maxiNum > max) {
    max = maxiNum;
  }
  if (maxiNum % 2 === 0) {
    pair++;
  }
}

let promedio = function () {
  console.log(
    "%c El promedio es " + sum / quantity,
    "color:aqua; font-size:1rem"
  );
  console.log(
    "%c El numero maximo ingresado es " + max,
    "color:tomato; font-size:1.2rem; border:1px dashed white"
  );
  console.log(`%c Usted ingreso ${pair} NUMEROS PARES `  , 'color:white; font-size:1rem');
};
 

promedio(); */

/*----------------------PRACTICA 7 OBJETOS Y FUNCION CONSTRUCTORA  ---------------------*/

// function persona(nombre, edad, pais) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.pais = pais;
// }

// let cantidadPersonas = Number(
//   prompt("ingrese cantidad de personas que desea ingresas")
// );
// let personas = [];

// const crearPersona = (cant) => {
//   for (i = 1; i <= cant; i++) {
//     let nombre = prompt(`Persona n° ${i} ingrese el nombre`);
//     let edad = prompt(`Persona n° ${i} ingrese la edad`);
//     let pais = prompt(`Persona n° ${i} ingrese el pais`);
//     personas.push(new persona (nombre,edad,pais));
//   }
// };

// crearPersona(cantidadPersonas);

//funcion constructora con funcion de fecha
//sin this , los parametros si tienen los mismos nombres que los valores retornados ya js lo entiende
//como que son el mismo nombre que la propiedad lo que ahorra por ejemplo nombre: nombre ;
/* persona = (nombre, edad, pais) => ({ nombre, edad, pais });

let personas = [];

const crearPersona = (cant) => {
  for (i = 1; i <= cant; i++) {
    let nombre = prompt(`Persona n° ${i} ingrese el nombre`);
    let edad = prompt(`Persona n° ${i} ingrese la edad`);
    let pais = prompt(`Persona n° ${i} ingrese el pais`);
    personas.push(persona(nombre, edad, pais));
  }
};
let cantidadPersonas = Number(
  prompt("ingrese cantidad de personas que desea ingresas")
);

crearPersona(cantidadPersonas);
console.log(personas);
 */

/*---------------------- practica 8 ---------------------*/

/* let cant = Number(prompt("ingrese cantidad de numeros"));
let numeros = [];
const crearArr = (cantidad) => {
  for (i = 0; i < cantidad; i++) {
    numeros.push(Number(prompt("ingrese Numero")));
  }
};

crearArr(cant);

const resultado = numeros
  .filter((x) => x % 2 == 0)
  .map((y) => y * y)
  .reduce((r, z) => r + z);

  console.log(`El resultado es la suma de todos los numeros pares al cuadraro y es ${resultado}`); */

/*---------------------- practica con reduce ---------------------*/
// const nombres = [
//   "mario",
//   "pepe",
//   "pepe",
//   "luis",
//   "alberto",
//   "maria",
//   "pepe",
//   "alberto",
//   "raul",
//   "rodolfo",
//   "raul",
//   "mario",
//   "federico",
//   "maria",
// ];

// let contadorNombres = nombres.reduce((contador, nombre) => {
//   contador[nombre] = (contador[nombre] || 0) + 1;
//   return contador;
// }, {});

// let mismosNombres = nombres.filter((nom) => nom === "pepe");

// console.log(contadorNombres);



