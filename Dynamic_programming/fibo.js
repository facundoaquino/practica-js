// fibo =  1, 1, 2 , 3  , 5 ,8 , 13 , 24 , 35 ,57
// the times grows exponecianny because for each call other two calls appesrs

/*---------------------- RECURSIVE SOLUTION (INEFICIENT) ---------------------*/
const fibo = (n) => {
	if (n == 1) return 1
	if (n == 2) return 1

	return fibo(n - 1) + fibo(n - 2)
}

// const term = fibo(45)
// console.log(term)

/**
 * 
 * fibo 6
 fibo(n - 1)    +    fibo(n - 2)

      fibo(5)   +    fibo(4)
 
    f(4) +     f(3)   (+)      f(3) +  f(2)  
      |         f(2)+f(1)      f(2)+f(1)  +1
     / \
  f(3) f(2)

 */

/*---------------------- DINAMIC SOLUTION  ---------------------*/

const fibDinamic = (n, memo) => {
	if (memo[n]) {
		return memo[n]
	}
	if (n <= 2) {
		result = 1
	} else {
		result = fibDinamic(n - 1, memo) + fibDinamic(n - 2, memo)
	}

	memo[n] = result
	return result
}
const arrD = []
const resultDinamic = fibDinamic(65, arrD)
console.log(resultDinamic)

/*---------------------- DINAMIC SOLUTION  WHIT CLOUSURE---------------------*/

// fibo =  1, 1, 2 , 3  , 5 ,8 , 13 , 24 , 35 ,57

const fibDinamic2 = () => {
	const map = {}

	return function fib(n) {
		if (map[n]) {
			return map[n]
		}
		if (n === 1 || n === 2) {
			return 1
		}

		map[n] = fib(n - 1) + fib(n - 2)
		return map[n]
	}
}
const fibi = fibDinamic2()
console.log(fibi(6))
