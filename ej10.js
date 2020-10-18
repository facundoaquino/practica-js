//funcion que verifica si un numero es capicua
 

 const esCapicua=(num) => {
     const capicua =num.toString().split('').reverse().join('')
    // console.log(capicua)
     capicua==num
    ?console.log('El numero es capicua')
    :console.log('el numero no es capicua')

} 
    
esCapicua('')

 let numero=10.89
 console.log(parseFloat('numero'))