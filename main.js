const arr = [1,2,3,4,5,6,7,8]


const resultado = arr.findIndex((el,index)=>{
    console.log(el,index);
   if(el==5){
       arr.splice(index,1)
       return true
   }
})
// console.log(resultado);
console.log(`el array quedo asi : ${arr}`);
