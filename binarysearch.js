const binarySearch = (array, target) => {
  let f = 0, b = array.length-1
  let mid

  while(f <= b) {
    mid = Math.floor(f + (b-f)/2)
    if (array[mid] === target) {
      return mid
    }

    if (target > nums[mid]) {
      f = mid + 1
    } else {
      b = mid - 1
    }
  }

  return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 5))