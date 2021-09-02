const timeout = setTimeout(() => {
    console.log("Timeout 1000")
}, 1000)

const interval = setInterval(() => {
    console.log('Interval')
}, 1000)

setImmediate(() => {
    console.log('Immediate')
})

setTimeout(() => {
    clearInterval(interval)
}, 3000)