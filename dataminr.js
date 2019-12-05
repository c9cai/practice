let buildingHeights = (buildings) => {
  let arr = new Array(buildings.length).fill(0)

  for (let i = 1; i < buildings.length; i++) {
    arr[i] = Math.min(arr[i-1] + 1, buildings[i], i)
  }

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i-1] > arr[i] + 1) {
      arr[i-1] = arr[i] + 1
    }
  }

  console.log(arr)
}



buildingHeights([10,1,10,10,10,10,1,10,10])

