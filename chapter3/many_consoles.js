
const obj = {
    outside: {
        inside: {
            key: 'value'
        }
    }
}

console.log('===========================')
console.time('전체시간')
console.table([{name: 'hello', birth: 1997}, {name: 'good', birth: 2003}])
console.error('Error')

console.dir(obj)
console.dir(obj, {depth: 1, colors: false}) // depth로 볼만큼의 데이터만 볼수있음

console.time('시간측정')

setTimeout(() => {
    console.timeEnd('시간측정')
}, 1000)

function b() {
    console.trace('에러 위치 추적')
}

function a () {
    b()
}

a()

console.timeEnd('전체시간')
console.log('===========================')