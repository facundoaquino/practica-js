/*---------------------- ejercicio  ---------------------*/
//-----------toma un array y   devuelve otro en orden aleatorio
let arr = [1, 2, 3, 'facu', 'maria', 'cualquiercosa', 'facu'];
// let arr = []
// getrandom Retorna un entero aleatorio entre min (incluido) y max (excluido)
const getrandom = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

const crearRandom = (arr) => {
	if (arr.length == 0) return console.error('el arreglo esta vacio');
	let temp = [...arr];
	let count = temp.length;
	let newarr = [];
	while (count) {
		let index = temp.indexOf(temp[getrandom(0, count)]);
		newarr.push(temp[index]);
		temp.splice(index, 1);
		console.log(count)
		count--;
	}
	return newarr;
};
console.log(arr);
console.log(crearRandom(arr));
;
