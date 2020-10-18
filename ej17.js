//elimina duplicados de un array de obetos , teniendo en cuenta todas sus propiedades , 


const array = [
    {
      "id": "990448",
      "apellidos": "Gonzalez",
      "rango": "MS"
    },
    {
      "id": "990448",
      "apellidos": "Gonzalez",
      "rango": "MS"
    },
    {
      "id": "997",
      "apellidos": "Ramirez",
      "rango": "MR",
    }

  ]

const arrCopy = [...array];
const duplicados = [];
arrCopy.forEach((el, index) => {

    const copyItem = JSON.stringify(el);
    
	arrCopy.forEach((item, indice) => {
         
		const itemCopy = JSON.stringify(item);
		//el elemento de por si se va a encontrar asi mismo , por eso hay que establecer  index!=indice
		if (copyItem == itemCopy && index != indice) {
			//lo que devuelve arrCopy.splice es el elemento que se encuentra duplicado
			//y lo ponemos en el array de duplicados
			duplicados.push(arrCopy.splice(indice, 1));
		}
	});
});

console.log(array);
console.log(arrCopy);
console.log(duplicados);
