// Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].


const array = [0,12,3,4,5,6,-10 ]

const masAltoYmasBajo = (arr)=>{
  const acc = {}
     acc.mayor= arr.reduce((acc,el)=>acc>el?acc:el)
    acc.menor= arr.reduce((acc,el)=>acc<el?acc:el)
         

  
console.log(acc)
}

masAltoYmasBajo(array)

console.log(Math.max(...array))//fuciona si lo pasamons con el spread operator o operador de propagacion
console.log(Math.min(...array))
