let quicksort = (array) => {
  
  let swap = (a, b) => {
    let temp = array[a]
    array[a] = array[b]
    array[b] = temp
  }

  let recurse = (front, back) => {
    if (front >= back) return 

    let pivot = array[back]
    let partitionIndex = front - 1
  
    for (let i = front; i <= back; i++) {
      if (array[i] <= pivot) {
        partitionIndex++
        swap(i, partitionIndex) 
      }
    }
    console.log(partitionIndex, array)

    recurse(front, partitionIndex - 1)
    recurse(partitionIndex + 1, back)
  }

  recurse(0, array.length - 1)
  return array
}

console.log(quicksort([2,1]))
