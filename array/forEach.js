const users = [
	{
		id: 2,
		name: 'fernando',
		edad: 15,
		pais: 'uruguay',
	},
	{
		id: 3,
		name: 'alberto',
		edad: 22,
		pais: 'peru',
	},
	{
		id: 5,
		name: 'maria',
		edad: 45,
		pais: 'uruguay',
	},
	{
		id: 6,
		name: 'fernando',
		edad: 32,
		pais: 'argentina',
	},
	{
		id: 9,
		name: 'julia',
		edad: 17,
		pais: 'argentina',
	},
	{
		id: 4,
		name: 'carlos',
		edad: 20,
		pais: 'brasil',
	},
]

/*---------------------- forEach ---------------------*/
//escribir funcion añadirProp que toma un array de objetos, una propiedad y un valor y agrega esa nueva propiedad con el valor , predeterminar el parametro valor en 'sin detalle'
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Parametros_por_defecto
//probar el resultado pasando un valor y no pasandolo
//prabar imprimir por pantalla el array modificado con console.table()

const añadirProp = (arr, propiedad, valor = 'sin detalle') => {}

console.table(users)
