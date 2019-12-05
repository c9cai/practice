let test = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 1) {
      resolve('yeet', 'yooooo', 'yaaaaa')
    } else {
      reject('feelsbadman')
    }
  }).then((res1, res2, res3) => {
    console.log(res1, res2, res3);
  }).catch(err => {
    console.log(err)
  })
}

test(1,2);