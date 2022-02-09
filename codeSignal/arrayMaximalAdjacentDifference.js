// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.

//HAY QUE SACAR LA MAYOR DIFERENCIA MAXIMA ENTRE DOS ELEMENTOS ADYACENTES DEL ARRAY

const inputArray = [2, 4, 1, 0]

function solution(inputArray) {
	let maxDifference = -1
	if (inputArray.length < 3) return 0

	for (let i = 0; i < inputArray.length; i++) {
		if (i !== 0 && i < inputArray.length) {
			const actual = inputArray[i]
			const prev = inputArray[i - 1]
			const next = inputArray[i + 1]
			if (actual - prev > maxDifference) maxDifference = actual - prev
			if (actual - next > maxDifference) maxDifference = actual - next
		}
	}

	return maxDifference === -1 ? 0 : maxDifference
}
