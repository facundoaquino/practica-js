'use strict'

// 

let montoTotal = 10000
console.log(montoTotal);

// montTotal= 15000
// console.log(montTotal);
//=> montTotal is not defined


////////////////////////////////////////////////

const obj1 = Object.create(null,{
    x:{
        value:100,
        configurable:false
    }
})

obj1.x = 300
 //=>  Cannot assign to read only property 'x' of object '[object Object]'


////////////////////////////////////////////////
