const {Worker, isMainThread, parentPort, workerData} = require('worker_threads')

const min = 2;
const max = 10000000;

function generatePrimes(start, range) {
    const primes = []
    let isPrime = true;
    const end = start + range;
    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j  && i % j === 0) {
                isPrime = true
                break
            }
        }

        if (isPrime ) {
            primes.push(i)
        }
        isPrime = true
    }
    return primes
}

function oneThreadPrime () {
    console.log('=== oneThreadPrime ===')
    console.time('prime')
    const primes = generatePrimes(min, max)
    console.timeEnd('prime')
    console.log(primes)
}
function useThread () {
    const threadCount = 8
    const threads = new Set();
    const range = Math.ceil(max - min / threadCount)
    let start = min;
    
}

// oneThreadPrime()

