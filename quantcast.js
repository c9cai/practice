//quantcast
function storage () {
  this.data = {}
  this.count = 0

  this.fields = {
    vals: [],
    valMap: {},
    children: {}
  }
}

storage.prototype.add = function(input) {
  this.data[this.count] = input

  this.addFields(this.fields, input)

  this.count++
}

storage.prototype.addFields = function(cur, input) {
  let self = this
  let count = this.count
  Object.entries(input).forEach(field => {
    if (cur.children[field[0]]) {
      if (typeof field[1] !== 'object' || Array.isArray(field[1])) {
        cur.children[field[0]].vals.push(count)
        cur.children[field[0]].valMap[count] = field[1]
      } else {
        self.addFields(cur.children[field[0]], field[1])
      }  
    } else {  
      if (typeof field[1] !== 'object' || Array.isArray(field[1])) {
        cur.children[field[0]] = {
          vals: [count],
          valMap: {
            [count]: field[1]
          },
          children: {}
        }
      } else {
        cur.children[field[0]] = {
          vals: [],
          valMap: {},
          children: {}
        }
        self.addFields(cur.children[field[0]], field[1])
      }
    }
  }) 
}

let match = (pool, fields, input, map) => {
  Object.entries(input).forEach(entry => {
    if (Array.isArray(entry[1])) {
      for (let i = 0; i < pool.length; i++) {
        let arr1 = fields.children[entry[0]].valMap[pool[i]].slice()
        let arr2 = entry[1]
        console.log(arr1)
        console.log(arr2)
        if (!arr2.every(val => arr1.includes(val))) {
          pool.splice(i, 1)
          i--
        }
      }
    } else if (typeof entry[1] === 'object') {
      pool = match(pool, fields.children[entry[0]], entry[1], map)
    } else {
      for (let i = 0; i < pool.length; i++) {
        if (fields.children[entry[0]].valMap[pool[i]] !== entry[1]) {
          pool.splice(i, 1)
          i--
        }
      }
    }
  })

  return pool
}

storage.prototype.get = function(input) {
  let ret = []
  let self = this
  let pool = [...Object.keys(this.data)]
  match(pool, self.fields, input, self.data).forEach(m => {
    ret.push(self.data[m])
  })  

  console.log(ret)
  return ret
}

storage.prototype.delete = function(input) {
  let ret = []
  let self = this
  let pool = [...Object.keys(this.data)]
  match(pool, self.fields, input, self.data).forEach(m => {
    delete self.data[m]
  })  
}

let s = new storage()
s.add({"id":1,"last":"Doe","first":"John","location":{"city":"Oakland","state":"CA","postalCode":"94607"},"active":true})
s.add({"id":2,"last":"Doe","first":"Jane","location":{"city":"San Francisco","state":"CA","postalCode":"94105"},"active":true})
s.add({"id":3,"last":"Black","first":"Jim","location":{"city":"Spokane","state":"WA","postalCode":"99207"},"active":true})
s.add({"id":4,"last":"Frost","first":"Jack","location":{"city":"Seattle","state":"WA","postalCode":"98204"},"active":false})
console.log(s.data)
console.log(s.fields)
console.log('ID', s.fields.children['id'])
console.log('LOCATION', s.fields.children['location'])
console.log('CITY', s.fields.children['location'].children['city'])
console.log('STATE', s.fields.children['location'].children['state'])
console.log('POSTAL', s.fields.children['location'].children['postalCode'])
s.get({
  "location": {
    "state": "WA"
  },
  "active": true
})

s.get({
  "id": 1
})

s.delete({
  "id": 1
})

console.log(s.data)

s.get({
  "id": 1
})

// s.add({"type":"list","list":[2,3,4,5]})
// s.add({"type":"list","list":[3,4,5,6]})
// s.add({"type":"list","list":[4,5,6,7]})
// s.add({"type":"list","list":[5,6,7,8]})
// s.add({"type":"list","list":[6,7,8,9]})
// s.get({"type":"list","list":[2]})
