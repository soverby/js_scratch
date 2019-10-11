const moment = require('moment')

console.log(Date.now())

console.log(moment(Date.now()).format('YYYY-MM-DD HH:MM:SS'))

//2019-09-16 18:45:11

const httpOptions = {
    hostname: 'test.com',
    port: 80,
    path: '/test',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

httpOptions.headers['Content-Length'] = 55;

console.log(httpOptions)
console.log('----------------')
// const keyHttp = Object.assign(httpOptions)

const keyHttp = JSON.parse(JSON.stringify(httpOptions));


console.log(keyHttp)
console.log('----------------')

keyHttp.headers['Content-Length'] = 1200
keyHttp.method = 'GET'

console.log(httpOptions)
console.log('----------------')
console.log(keyHttp)
console.log('----------------')





