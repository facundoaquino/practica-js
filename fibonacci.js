// secuencia de fibonacci de forma iterativa


const arr = [0,1]

while (arr.length< 10){

arr [arr.length] = arr[arr.length - 1 ] + arr [arr.length-2]


}

console.log(arr);



// codificar la secuencia de fibonacci de forma recursiva sin usar espacio adicional

    function getTermOfFibonacci (n) {


        if( n == 1) return 1
        if(n == 0) return 0

        return getTermOfFibonacci(n-1) + getTermOfFibonacci (n-2)


    }

    const result = getTermOfFibonacci(10)
    console.log(result);