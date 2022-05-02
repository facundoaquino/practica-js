// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.
const arr = [3, 4, 6, 7, 8, 5]

function minimumSwaps(arr) {
	let swapCounter = 0

	const min = Math.min(...arr)
	console.log({ min })

	for (let i = 0; i < arr.length; i++) {
		if (!(arr[i] === min + i)) {
			const swappedOne = arr[i]
			//FIXME: it´s works but have bad performance fro hacker rank
			const swappedFromIndex = arr.indexOf(min + i)
			arr[i] = min + i
			arr[swappedFromIndex] = swappedOne
			swapCounter++
		}
	}
	return swapCounter
}

console.log(minimumSwaps(arr))
