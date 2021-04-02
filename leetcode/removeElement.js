//funcion que toma un array y un valor hay que sacar el valor del array  de todas las posiciones donde se encuentre
//la funcion tiene que devolver el length del array , no se puede crear un array de copia las modificaciones se tienen qe hacer en el array original


const nums = [0, 1, 2, 2, 3, 0, 4, 2]
const val = 2

var removeElement = function (nums, val) {
	while (nums.indexOf(val) != -1) {

        nums.splice(nums.indexOf(val),1)


    }
    console.log(nums.length);
	return nums.legth
}

removeElement(nums, val)
