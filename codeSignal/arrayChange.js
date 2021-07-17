/**
 * 
 * You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.
 * 
 * 
 */

function arrayChange(inputArray) {
	let count = 0

	for (let i = 0; i < inputArray.length; i++) {
		while (inputArray[i + 1] <= inputArray[i]) {
			inputArray[i + 1] += 1

			count++
		}
	}

	return count
}

const a = [-1000, 0, -2, 0]

arrayChange(a)
