 
 const palindromo = (palabra)=>{
     let copia = palabra.split('').reverse().join('')   
     if(copia==palabra){
         console.log('es un palindromo!!')
     }   
      console.log(copia)
     console.log(palabra)
    //  return palabra.split('').reverse()
 }

 palindromo('menem')
//  console.log(nuevapalabra )