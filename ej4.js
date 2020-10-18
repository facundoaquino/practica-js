// funcion que cuente la palabra que se repite mas veces en una sentencia

const obj = {
	a: 1,
	b: 2,
};
console.log(obj['a']);
//la notacion de propiedades por corchetes va a recibir solamente cadenas
obj['c'] = 1;
console.log(obj);
//El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable
console.log(Object.entries(obj));

const sentence = 'Mensaje que que mensaje que se se repite repite veces veces que se que se';
//El método split() divide un objeto de tipo String en un array (vector) de cadenas
//cadena.split([separador][,limite])

const repeat = (sent) => {
	const sentenceLower = sent.toLowerCase();
	const splited = sentenceLower.split(' ');
	const reduced = splited.reduce((acc, el) => {
		if (acc[el]) {
			acc[el]++;
		} else {
			acc[el] = 1;
        }
        // console.log(acc);
        return acc
    }, {});
    // console.log(reduced);
    return Object.entries(reduced).reduce((acc,el)=>{
        return el[1]>acc[1] ? el : acc  
      })

};


console.log(repeat(sentence));





















