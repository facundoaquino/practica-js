let personas = [
	{ id: 'p1', nombre: 'Luis', estatus: true },
	{ id: 'p2', nombre: 'Pedro', estatus: true },
	{ id: 'p3', nombre: 'Emmanuel', estatus: true },
];

//funcion que elimina por  numero de id y objeto como parametro
// El método findIndex() devuelve el índice del primer elemento
//  de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
//funciona para atributos de valores unicos como un id
const personaEliminar = 'p3';

personas.forEach((item,index,arr)=>{
    if(item.id==personaEliminar)
    { arr.splice(index,1 )}
})

console.log(personas)