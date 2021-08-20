// performance con libreria nativa perf_hooks de node
const { performance } = require('perf_hooks')

const t1 = performance.now()

let arr = new Array(350000)
arr = arr.fill().map((e, i) => i)
for (let i = 0; i < arr.length; i++) {
	arr[i] = arr[i] * arr[i]
}

const t2 = performance.now()
const resultTime = t2 - t1
console.log({ time: resultTime / 1000 + '  segundos...' })
