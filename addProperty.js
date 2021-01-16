// add property continent to array that is a parametrer and the second parametrer is the value

const countries = [{

   name:'brasil',
   population:12313
},{
   name:'paraguay',
   population:1234
}]


const addContinent =  (arr, str)=> {
   return arr.map((obj) => ({ ...obj, continent: str }));
 }



 const result = addContinent(countries,'South America')
 console.log(result);