const coords = [
	{
		x: 10,
		y: 100,
	},
	{
		x: 12,
		y: 50,
	},
	{
		x: 15,
		y: 10,
	},
	{
		x: 1,
		y: 5,
	},
]

// sort cambia el array no devuelve uno nuevo
const returnsCoordsSorted = (arr) => {
	const copy = [...arr]
	const compareByY = (a, b) => a.y - b.y

	return copy.sort(compareByY)
}

const result = returnsCoordsSorted(coords)
console.log(result)
