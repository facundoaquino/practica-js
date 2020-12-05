//entregar solo los objetos que NO se repiten (que aparecen una vez)

let array = [
	{
		institucion: 'LUS',
		servicio: 'listCon',
	},
	{
		institucion: 'LUS',
		servicio: 'listCon',
	},
	{
		institucion: 'LAB',
		servicio: 'listCon',
	},
	{
		institucion: 'LUS',
		servicio: 'listCon',
	},
	{
		institucion: 'azs',
		servicio: 'listCas',
	},
]

const busqueda = array.reduce((acc, persona) => {
	const clave = JSON.stringify(persona)
	acc[clave] = acc[clave] + 1 || 0
	return acc
}, {})

console.log(busqueda)

const duplicados = array.filter((persona) => !busqueda[JSON.stringify(persona)])

console.log(duplicados)
