// funcion que toma un array de numeros y un target , devolver un array de los dos indices que suman el target
// no importa el orden y no puede usarse el mismo elemento , si el mismo numero pero no el mismo indice
 


const nums=[3,3,3,4,21,5]


var twoSum = function(nums, target) {
    
    const sum = nums.reduce((acc,nume,i)=>{
        const isSum = nums.findIndex((num,inx)=>(((nume+num)===target ))&&( i!=inx))
        isSum != -1 ? acc.push(isSum) :''
        return acc
    },[])
    sum.length=2
    return sum
    
};

console.log(twoSum(nums,25))