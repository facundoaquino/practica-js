// Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.

// La primera función se llamará doble. Esta recibirá un número y retornará el doble.

// La segunda función se llamará triple. Esta recibirá un número y retornará el triple.

// La tercera función se llamará apply y recibirá por parámetro un numero y una función. Esta retornará el valor de aplicar dicha función al valor que recibió.

// const doble = (number) => number * 2;
// const triple = (number) => number * 3;

// const apply = (number, callback) => callback(number);

// apply(2, doble);


function doble (number) {
    return number *2
}
function triple (number) {
    return number *3
}

function apply (number, callback) {
    return callback(number)
}



// Creemos cuatro funciones que realicen las operaciones principales de una calculadora. Nuestro trabajo será definir la función suma, resta, multiplicacion y division. Cada una de ellas recibirá dos parámetros y deberá realizar la operación matemática según corresponda. Por ejemplo, la función suma deberá retornar la suma de ambos parámetros; la función resta, la resta de ambos parámetros, y así sucesivamente.
// Ahora sí, con esas funciones ya definidas, creemos la función calculadora. Esta función recibirá dos parámetros numéricos y una función, que será nuestro callback.


function suma (a , b ) {
    return   a + b
}
function resta (a , b ) {
    return   a - b
}
function multiplicacion  (a , b ) {
    return   a * b
}
function division (a , b ) {
    return   a / b
}

function calculadora (a , b , operacion){
    return operacion (a,b)
}



// Nuestra tarea ahora es crear dos funciones:

// La primera función debe llamarse agregarHttp. Esta recibe por parámetro una URL a la cual le concatena el String "http://" al comienzo de esa URL y luego retorna ese valor. La segunda función se llama procesar y recibe una lista de sitios web y una función. La función procesar devuelve un array que contiene todos los resultados de aplicar a cada elemento la función pasada.


// function agregarHttp(url) {

//     if(typeof url == 'string')    return    'http://'+ url 
//     const arrayHTTP = [ ]
//     url.forEach(element => {
//         arrayHTTP.push('http://'+ element)
//     });
//     return arrayHTTP
// }

// function procesar(urlArray,callback){
//     return callback(urlArray)
// }

 
// function agregarHttp(url) {
//     if(typeof url == 'string')    return    'http://'+ url 
//     const arrayHTTP = [ ]
//     for(let i = 0 ; i < url.length;i++){
//         arrayHTTP.push('http://'+ url[i] )
//     }
//     return arrayHTTP
// }

 
function agregarHttp(url) {
   
    return    'http://'+ url 
}

const procesar=(urlArray,callback)=> urlArray.map(callback)       


const arrayu = ['google.com','digitalhouse.com','clarin.com']
const urls= procesar(arrayu,agregarHttp)
console.log(urls)

