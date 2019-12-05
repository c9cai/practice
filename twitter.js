
// Input Tickets:
// [
//   (JFK, BOS),
//   (LAX, ORD), 
//   (SEA, SFO), 
//   (ORD, JFK), 
//   (SFO, LAX)  
// ]

// Expected Output:
// SEA -> SFO -> LAX -> ORD -> JFK -> BOS

const trip = (input) => {   
    if (input.length === 0) {
        return []
    }
    
    console.log('running')
    
    let trip = []
    trip.push(input[0][0], input[0][1])
    input.shift()
    
    let front = null, back = null
    
    console.log(trip)
    while (input.length > 0) {
        front = trip[0]
        back = trip[trip.length - 1]
        
        for (let i = 0; i < input.length; i++) {
            let cur = input[i]
            if (cur[0] === back) {
                trip.push(cur[1])
                input.splice(i, 1)
                break
            } else if (cur[1] === front) {
                trip.splice(0, 0, cur[0])
                input.splice(i, 1)
                break
            }
        }
    }
    
    console.log(trip)
    return trip
}

const tripOpt = (input) => {
    let map = {}
    let trip = [] 
    let end = []
    
    input.forEach(t => {
        map[t[0]] = t[1]
        end.push(t[1])
    })
    
    let start = null
    input.forEach(t => {
        if (end.indexOf(t[0]) < 0) {
            trip.push(t[0])
        }
    })
    console.log(start)
    
    console.log(map)
    let max = input.length + 1
    while (trip.length !== max) {
        trip.push(map[trip[trip.length-1]])
    }
    
    console.log('solution', trip)
    return trip
    
}

const input1 = [
  ['JFK', 'BOS'],
  ['LAX', 'ORD'], 
  ["SEA", "SFO"], 
  ["ORD", "JFK"], 
  ["SFO", "LAX"]  
]

tripOpt(input1)

// JKF -> BOS
//[
//   (LAX, ORD), 
//   (SEA, SFO), 
//   (ORD, JFK), 
//   (SFO, LAX)  
// ]

// JKF -> BOS
//[
//   (LAX, ORD), 
//   (SEA, SFO), 
//   (ORD, JFK), 
//   (SFO, LAX)  
// ]

// ORD->JKF -> BOS
//[

//   (SEA, SFO), 
//   (SFO, LAX)  // LAX->ORD->JKF -> BOS
//[

//   (SEA, SFO), 
//   (SFO, LAX)  
// ]
// ]

// LAX->ORD->JKF -> BOS
//[

//   (SEA, SFO), 
//   (SFO, LAX)  
// ]

// SEA->SFO->LAX->ORD->JKF -> BOS



