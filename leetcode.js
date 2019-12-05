//4 median of 2 arrays

let getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

let leet4 = () => {
  let nums1 = [getRandomInt(100), getRandomInt(100), getRandomInt(100)]
  let nums2 = [getRandomInt(100), getRandomInt(100), getRandomInt(100), getRandomInt(100),]
  nums1 = nums1.sort()
  nums2 = nums2.sort()

  console.log(nums1, nums2)

  //even/even works :)

  if (nums1.length%2 === 0 && nums2.length%2 === 0) {
    console.log('inside')
    let i = Math.floor(nums1.length/2)
    let j = Math.floor(nums2.length/2)
    
    while ((i > 0 && i < nums1.length-1 && j > 0 && j < nums2.length-1) ) { //do we need last 2 checks?
      if (nums1[i-1] > nums2[j]) {
        console.log(1)
        i--, j++
        console.log(nums1[i-1], nums1[i])
        console.log(nums2[j-1], nums2[j])
      } else if (nums2[j-1] > nums1[i]) {
        console.log(2)
        i++, j--
      } else {
        break
      }
    }
    console.log('here')
    console.log((Math.max(nums1[i-1], nums2[j-1]) + Math.min(nums1[i], nums2[j]))/2)
    return (Math.max(nums1[i-1], nums2[j-1]) + Math.min(nums1[i], nums2[j]))/2
  } else if (nums1.length%2 === 1 && nums2.length%2 === 1) {      //odd/odd 
  
  } else if (nums1.length%2 === 1 && nums2.length%2 === 0) { //odd/even || even/odd
    console.log('odd even')
    let i = Math.floor(nums1.length/2)
    let j = Math.floor(nums2.length/2)
    let med = 1

    while (i >= 0 && i <= nums1.length-1 && j >= 0 && j <= nums2.length-1) {
      if(med === 1) {
        console.log(1)
        if (nums1[i] > nums2[j]) {
          console.log('1a')
          if (nums1[i+1] < nums2[j]) {
            console.log('yi')
            i++, j--
          } else {
            console.log('er')
            med = 2
          }
        } else if (nums1[i] < nums2[j-1]) {
          console.log('1b')
          if (nums1[i-1] > nums2[j-1]) {          
            console.log('san')
            i--, j++
          } else {
            console.log('shi')
            i++, j--
            med = 2
          }
        } else {
          console.log('answer is:', nums1[i])
          return nums1[i]
        }
      } else {
        console.log(2)
        if (nums2[j] < nums1[i-1]) {
          if (nums2[j-1] > nums1[i-1]) {
            j--, i++
          } else {
            j++, i--
            med = 1
          }
        } else if (nums2[j] > nums1[i]) {
          if (nums2[j+1] < nums1[i]) {
            j++, i--
          } else {
            med = 1
          }
        } else {
          console.log('answer is:' , nums2[j])
          return nums2[j]
        }
      }
    }
  }
}

leet4()