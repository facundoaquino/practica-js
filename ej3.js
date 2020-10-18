// interando el arreglo una vez , descartar los null undefined y los 0

const clean = (arr)=> arr.reduce((acc,el)=>{
    if(el){
        acc.push(el)
    }
    return acc
},[])

const cleaned = clean(['hola',2,0,null,true,false,10])
console.log(cleaned);