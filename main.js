

 // funcion que toma una cadena y devuelve cantidad de vocales y consonantes

 const contarVc =(cadena)=>{

    const vocales= cadena.match(/[aeiuo]/g).length
    console.log(vocales)
    const consonantes= cadena.match(/[^aeiuo]/g).length
    console.log(consonantes)
    return{
        vocales,
        consonantes
    }
 }

 const resultado = contarVc('contando')
 console.log(resultado)

 // funcion que valida si un nombre es valido
 

 const validarNombre = (nombre)=>{

    return /^[a-z\s]+$/g.test(nombre)

 }

 console.log(validarNombre('facundo,'))

 

 //funcion para validar un email valido

 const validaEmail = (email)=>{

 return   /\S+@\S+\.\S+/.test(email)

 }

 console.log(validaEmail('facun90@live.com'))