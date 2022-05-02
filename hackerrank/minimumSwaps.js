// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.

const arr = [1, 3, 2, 4, 5]

function minimumSwaps(arr) {
	let swapCounter = 0

	const min = Math.min(...arr)
	console.log({ min })

	for (let i = 0; i < arr.length; i++) {
		if (!(arr[i] === min + i)) {
			swapCounter++
		}
	}
	return swapCounter - 1
}

console.log(minimumSwaps(arr))
