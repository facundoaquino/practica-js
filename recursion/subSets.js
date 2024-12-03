

const arr = [1, 2, 3]



function subSets(arr) {

  const result = [[]]


  function goDeep(index, current) {

    for (let i = index; i < arr.length; i++) {
      current.push(arr[i])
      result.push([...current])


      goDeep(i + 1, current)

      current.pop()
    }


  }

  goDeep(0, [])
  return result
}

console.log(subSets(arr));
