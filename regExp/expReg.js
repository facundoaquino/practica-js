/*---------------------- expresiones regulares ---------------------*/
//conjuto de catacteres que conforman un patron de busqueda

// El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.

const cadena = 'casa esto no es mas que una casa , que es una casa, lindo el casamiento y el casador ';

const exp = new RegExp('casa', 'ig');
const exp2 = /casa/gi;
console.log(exp.test(cadena));
console.log(exp2.test(cadena));
console.log(/nods/.test(cadena));

const resultado = exp.exec(cadena);
console.log(resultado);

const nuevaCadena = cadena.replace('casa', '/edificio/');
console.log(nuevaCadena);

// \d busco cualquier digito numerico del 0-9 la barra invertida es con alt+92 \\\\\\\\
console.log(/\d/.test('esto no contiene numeros'));
console.log(/\d/.test('esto se conti3ne numeros o un numero'));

// tambien se puede buscar un clases de caracteres o grupo de caracteres []
console.log(/[0-2]/.test('aca hay numeros 934332'));

console.log(/[abc]/.test('hrc'));

// El método match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena.

console.log(cadena.match(/(casa)/gi));

//el . puede ser un comodin

console.log(/c..a/.test(cadena));

//con | podemos ejegir opciones seria como un or

console.log(/cars|mas/.test(cadena));

//acento circunflejo alt+94 ^ ^ ^ ^ ,significa que antes de ese simbolo no puede haber nada y el simbolo $ dice que despues no puede haber nada

console.log(/^casa$/.test(cadena));

// los {corchetes} son un cuantificador
/*------------------------------------------*/
//tiene que empezar con una letra de la a-z y tiene que estar 3 veces despues tiene que venir un arraoba@ y despues nada mas $
const cadena2 = 'abc@';
console.log(/^[a-z]{3}@$/i.test(cadena2));


//tiene que empezar ^ con un digito del 0-9 \d y tiene que haber de 2 a 5 {2,5} y despues no puede haber nada $
const cadena3 = '1233';
console.log(/^\d{2,5}$/.test(cadena3));


// {5, } tiene que estar al menos 5 veces , desues puede aparecer las veces que sea
const cadena4 = '15433'
console.log(/^\d{5,}/.test(cadena4));


/*---------------------- * asterisco ---------------------*/
// lo que esta antes del * puede estar , puede no estar y se puede repetir
 

const cadena5 = 'A-'
console.log(/A-[0-5]*/.test(cadena5));

/*---------------------- ? interrogacion ---------------------*/
// lo que esta antes del ? puede no esta , pero si esta solo puede aparacer una vez
const cadena6= 'casa@@'
console.log(/[a-z]@?$/.test(cadena6));

/*---------------------- +  ---------------------*/
//lo que esta antes del + tiene que estar una vez como minimo 

const cadena7 = 'A-5'
console.log(/A-[0-5]+/.test(cadena7));

//----------- \s valida un espacio en blanco
//----------- \S valida un que NO haya espacio en blanco

const cadena8= ' 9'
console.log(/^\s9$/.test(cadena8))


//-----------\d valida digitos del 0 al 9
//tiene que validar 5 {5} numeros
console.log(/^\d{5}$/.test('12344'))

//-----------\D valida que NO sean  digitos del 0 al 9
//tiene que sean 5 caracteres que no sean numeros
console.log(/^\D{5}$/.test('abcdd'))


//-----------\w conicide con cualquier caracter alfanumerico y un guion bajo _
//-----------\W caracteres que no sean alfanumerico ni un guion bajo

console.log(/^\w{2}@?$/.test('fa@'))