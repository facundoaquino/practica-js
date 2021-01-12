
//----------- REALIZAR UNA FUNCION QUE TOME UN OBJETO Y DEVUELVA OTRO OBJETO CON LAS CLAVE Y VALOR INVERTIDAS , NO SE PUEDE MODIFICAR EL OBJETO ORIGINAL


/*---------------------- OBJECT ---------------------*/

const needsInvert =  {
		nombre: 'pepe',
		apellido: 'gomez',
		edad:43 ,
		pais: 'uruguay',
		 
	}
 

	/*---------------------- solution 1 ---------------------*/

 const invertProps = (obj)=>{



	const temp = {}


	for(const prop in obj){
		temp[obj[prop]]=prop

	}

	console.log(temp);




 }
 
 invertProps(needsInvert)



 /*---------------------- solution 2 ---------------------*/


 const invertedProps2 = (obj)=>{


	const props = Object.keys(obj)
	const tempObject = {}
	props.forEach(prop=>{
		tempObject[obj[prop]]= prop

	})


	console.log(tempObject);

 }


invertedProps2(needsInvert)