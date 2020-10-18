//cuantas veces aparece un numero en un intervalo del 1 al 100

const max = 36
const cualAparece = 6
let contador = 0
let aparece=0

while(contador<=max){
    if(`${contador}`.indexOf(cualAparece)!= -1){
        aparece++
    }
    if(`${cualAparece}${cualAparece}`==contador){
        aparece++
    }
    contador++
}

console.log(aparece)