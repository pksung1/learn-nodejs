const {Worker, isMainThread, parentPort} = require('worker_threads')

if (isMainThread) {
    const worker = new Worker(__filename)
    worker.on('message', msg => console.log('from worker', msg))
    worker.on('exit', () => console.log('worker exit'))
    worker.postMessage('ping')
} else {
    parentPort.on('message', (value) => {
        console.log('from parent', value)
        setTimeout(() => {
            parentPort.postMessage('pong')
            parentPort.close()
        }, 1000)
    })
}