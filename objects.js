let a = {
  michelle: 'iscute'
}

let b = {}
b.michelle = a.michelle

a.michelle = 'isreallcute'

console.log(a, b)

let c = {
  asd : 'asdf'
}

let d = (obj) => {
  let e = c
  e.asd = 'gfsd'
}

d(c)
console.log(c)