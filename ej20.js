// posiciones de un array en otro array de pares a obj con for y reduce



let user = [
  ['evento', 'ejemplo'],
  ['token', '09XsasqweqweZasd91']
]

const obj = {}
  for(let i= 0; i<user.length ;i++){
    obj[user[i][0]]=user[i][1]
}
console.log(obj);




// const obj = user.reduce((acumulador,elemento)=>{
//     acumulador[elemento[0]]=elemento[1]
//     return acumulador

// },{})

// console.log(obj.evento);


