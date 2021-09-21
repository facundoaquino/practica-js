// dado un numero intero positivo devolver la suma de sus cifras

const num = 7184

const sumDigits = (n) => {
	// if(n===0)return 0
	// else return n % 10

	let acc = 0
	while (n !== 0) {
		acc = acc + (n % 10)
		n = Math.floor(n / 10)
	}
	return acc
}

const result = sumDigits(num)
console.log({ result })
