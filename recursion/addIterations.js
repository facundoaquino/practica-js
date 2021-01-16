

const additivePersistence = (num , iteration = 0 )=>{
 
   const numToArray = num.toString().split('').map(num=>Number(num))
   
   if (numToArray.length == 1){
     return iteration
   }

   const addNumbers = numToArray.reduce((acc,num)=>acc+num)
   
   return additivePersistence(addNumbers, ++iteration )
   
   




}


const result = additivePersistence(981 )
console.log(result);


