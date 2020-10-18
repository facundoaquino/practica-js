 //funcion para saber si es primo o no 


 const esPrimo = (numero)=>{

      
    let contador=true
    let ciclo=2
    while(ciclo<numero){
        // console.log(ciclo)
       if(numero%ciclo==0)
       {
           contador=!contador
           break
        }
       ciclo++
    }
    contador?
    console.log('El numero  es primo'):
    console.log('El numero no es primo')


 }


 esPrimo(125)