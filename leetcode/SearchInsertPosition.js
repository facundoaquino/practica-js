// funcion que recibe un array de enteros ordenados y un target
//devolver el indice del target pero si no esta devolver el indice de donde se encontraria


const arry =[2,3,4,7,8,9]
 
var searchInsert = function(nums, target) {
    if(nums.indexOf(target)!=-1){
        
        return nums.indexOf(target)
    } 
   const sorted =[...nums,target].sort((a,b)=>a-b)
    return sorted.indexOf(target)
};

const result =searchInsert(arry,11)
console.log(result);


 