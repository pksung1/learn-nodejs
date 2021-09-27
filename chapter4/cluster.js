const cluster = require('cluster')
const http = require('http')

const numCpus = require('os').cpus().length


if (cluster.isMaster) {
    console.log(`마스터 프로세스 ${process.pid}`)
    
    for (let i = 0; i< numCpus; i++) {
        console.log('fork')
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`)
        console.log(code, signal)
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.write('<h1>Hello Node</h1>')
        res.end()
        setTimeout(() => {
            process.exit()
        }, 1000)
    }).listen(8080)
}