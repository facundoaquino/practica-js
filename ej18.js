let personas = [
	{ id: 'p1', nombre: 'Luis', estatus: true },
	{ id: 'p2', nombre: 'Pedro', estatus: true },
	{ id: 'p3', nombre: 'Emmanuel', estatus: true },
];

//funcion que elimina por  numero de id y objeto como parametro
// El método findIndex() devuelve el índice del primer elemento
//  de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
//funciona para atributos de valores unicos como un id

const eliminaPorId = (obj, idAEliminar) => {
	let eliminados = obj.findIndex((item) => item.id == idAEliminar)
    eliminados = obj.splice(eliminados,1)
	return eliminados;
};

console.log(eliminaPorId(personas, 'p3'));
