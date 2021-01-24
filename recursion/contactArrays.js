/* cocact two or more arrays whit recursion */


const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [
	{
		name: 'john',
		lastname: 'perez',
	},
]

const contactArrays = (total, ...arrays) => {
	if (arrays.length == 0) {
		return total
	}

	total.push(...arrays.shift())
	 

	return contactArrays(total, ...arrays)
}

const result = contactArrays([], arr1, arr2, arr3)
 
console.log(result)
