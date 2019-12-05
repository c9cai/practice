let request = require('request');
const stream = require('stream');

let url = 'http://ics.ecal.com/ecal-sub/5d3a9d98e6058ac8388b4568/Elite%20Ice%20Hockey%20League.ics';
// module.exports.testStream = () => {
//   const writer = getWritableStreamSomehow();
//   request({
//     url: 'http://ics.ecal.com/ecal-sub/5d3a9d98e6058ac8388b4568/Elite%20Ice%20Hockey%20League.ics',
//     method: 'GET'
//   }, (err,res,body) => {
    
//   }).pipe()
// }

var makeStream = function(url) { 
  var rs = new stream.PassThrough()
  rs.setEncoding('utf8');
  rs.on('data', (chunk) => {
    console.log('#########################################################################################3')
    console.log(chunk);
  })

  request({
    url: 'http://ics.ecal.com/ecal-sub/5d3a9d98e6058ac8388b4568/Elite%20Ice%20Hockey%20League.ics',
    method: 'GET'
  }, (err,res,body) => {
    
  }).pipe(rs);
  
  
}

makeStream();