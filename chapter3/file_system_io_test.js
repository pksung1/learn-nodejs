const fs = require('fs').promises

fs.readFile('./readme').then((data) => {
    console.log(data)
    console.log(data.toString())
}).catch(e => console.error(e))

fs.writeFile('write', '글을 작성함')
    .then(() => fs.readFile('./write'))
    .then(data => console.log(data.toString()))
    .catch(e => console.error(e))