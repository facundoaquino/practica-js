/*dado un array devolver el item que mas se repite dentro de este y devolver el filtrado tambien si este item que mas se repite */


const array = ['perro','perro','perro','gato','perro','gato','vaca','caballo']


const duplicados  = (arr)=>{

    const duplicates =  arr.reduce((acc,item)=>{
        acc[item]?acc[item]++:acc[item]=1
         
        return  acc

    },{})

   const duplicetesEntries = Object.entries(duplicates)

   const toFilter= duplicetesEntries.reduce((acc,el)=>{
        return el[1]>acc?el[1]:acc

   },0)

  const result = duplicetesEntries.reduce((acc,el)=>{
      if(el[1]!= toFilter){
        acc.push(el[0])
        
    }
    
    return acc
    
  },[])

  return result

}

const resultado = duplicados(array)
console.log(resultado);
 

