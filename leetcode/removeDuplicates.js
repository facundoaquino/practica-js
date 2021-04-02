//remover duplicados sin hacer copia del array original , hacer todo en el array original , devolver el nuevo length del array


const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

var removeDuplicates = function (nums) {

    nums.forEach((num,i)=>{
        while(nums.indexOf(num,i+1)!=-1){
            nums.splice(nums.indexOf(num),1)
        }
    })

   return nums.length
    

}

removeDuplicates(nums)