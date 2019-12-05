let mergeSort = (array) => {
  if (!array) return []
  if (array.length === 1) return array

  let l = array.slice(0, Math.floor(array.length/2))
  let r = array.slice(Math.floor(array.length/2))
  // console.log(l,r)

  let sortL = mergeSort(l)
  let sortR = mergeSort(r)
  
  return merge(sortL,sortR)
}

const merge = (l ,r) => {
  let merged = []
  let curL = 0, curR = 0
  while (curL < l.length || curR < r.length) {
    if (curL === l.length) {
      merged.push(r[curR])
      curR++
      continue
    }

    if (curR === r.length) {
      merged.push(l[curL])
      curL++
      continue
    }
    
    if (l[curL] < r[curR]) {
      merged.push(l[curL])
      curL++
    } else {
      merged.push(r[curR])
      curR++
    }
  }
  return merged
}

console.log(mergeSort([2345,7324,5356,324,5324,63234,5676,3465,3245,7546,354,678,76,3546,34,56856,34,3,243,5467,546,543,524]))