let expression = (exp) => {
  let nums = []
  let signs = []

  let curNum = ''

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] !== '+' && exp[i] !== '-') {
      curNum += exp[i]
    } else {
      nums.push(parseInt(curNum))
      signs.push(exp[i])
      curNum = ''
    }
  }

  nums.push(parseInt(curNum))
  console.log(nums, signs) 

  while (nums.length > 1) {
    let first = nums.shift()
    let sign = signs.shift()
    nums[0] = (sign === '+') ? first + nums[0] : first - nums[0]
  }

  console.log(nums[0])
  return nums[0]
}

expression('1+2+3-2+4+5+2+5-1-45+123')