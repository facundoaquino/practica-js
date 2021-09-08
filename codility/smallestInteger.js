/**This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000]. */

function solution(arr) {
	// write your code in JavaScript (Node.js 8.9.4)
	const arrCopy = [...arr]

	const arrCopySorted = arrCopy.sort((a, b) => a - b)

	let positiveInteger = 1

	while (arrCopySorted.indexOf(positiveInteger) !== -1) {
		positiveInteger++
	}
	console.log(positiveInteger)
}

const arrTest = [1, 2, 3]
solution(arrTest)
console.log(arrTest)
