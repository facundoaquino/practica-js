 //eliminar duplicados de un array
  
const arrNumbers = [1,2,3,1,2,3,4,2,3,4,5,5,5,5,6,5,6,7]
const arrStrings = ['hola','que', 'tal','tal','tal','hola','estas','que', 'bien?','que']
const arrSimples = arrStrings.reduce((acc,elemento) =>{
      acc.includes(elemento)?acc:acc.push(elemento)
      // console.log(acc) 
      return acc
       
},[])

console.log(arrStrings)
console.log(arrSimples)
 

/*---------------------- otra forma de duplicacos---------------------*/

const array = [3,2,1,3,2,1,'casa','pedro','casa',9,0,1];
const sinDuplicados = array.filter((el,index,arr)=>(arr.indexOf(el)===index))
console.log(sinDuplicados)
 
