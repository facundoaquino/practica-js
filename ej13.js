//mostrar cuantas veces aparecen los nombres del array en pares de clave valor

const arr = ['facundo', 'facundo', 'juan', 'pedro', 'pedro', 'jose', 'facundo', 'jose', 'federico', 'jose', 'jose'];

const cuantoAparece = (arrNombres) => {
	const valoresRepetidos = arrNombres.reduce((acc, nombre) => {
		acc[nombre] = (acc[nombre] || 0) + 1;
		return acc;
	}, {});
	return valoresRepetidos;
};

const nombresQueAparecen = Object.entries(cuantoAparece(arr));
console.log(nombresQueAparecen);

const masQueAparece =  nombresQueAparecen.reduce(( acc ,nombre )=>{
            // if (acc[1] < nombre[1]){
            //       acc = nombre
            // }
         
      return acc[1] > nombre[1] ? acc : nombre

})

console.log(masQueAparece)

 