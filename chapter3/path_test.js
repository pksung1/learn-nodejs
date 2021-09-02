const path = require('path')
const name = __filename

console.log(path.dirname(name))
console.log(path.basename(name))
console.log(path.extname(name))

console.log('============')
console.log(path.parse(name))
console.log(path.format({dir: '/Users/psw/my-dev/learn-nodejs', name: 'test', ext: '.js'}))

console.log(path.normalize('C://users\\\\zerocho'))
