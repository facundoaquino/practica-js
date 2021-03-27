//cuanta la letra que mas se repitio 


 const frase = 'acaeee hay una letra letra cantidades cantidad que se repite'

 const cuentaLetra = (fra ='')=>{
 
     const fraseArray =[...(fra.replace(/ /g,''))]
     console.log(fraseArray);

        const result = fraseArray.reduce((acc,char)=>{
            acc[char] ? acc[char]=acc[char]+1 :acc[char]=1
             acc[char]>acc.max.cantidad && (acc.max.letra=char) && (acc.max.cantidad=acc[char]) 
             return acc
        },{max:{letra:'',cantidad:0}})

        const {letra,cantidad} =result.max
        return [letra,cantidad]
 }


 const [a,n] = cuentaLetra(frase)
 console.log(`la letra que mas salio es la ${a}  , salio ${n} veces`);