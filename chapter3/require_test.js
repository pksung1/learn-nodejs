console.log('Require가 맨위에 오지 않아도됩니다')

module.exports = "저를 찾아보세요"

console.log('require.cache 입니다.')
console.log(require.cache)

console.log('require.main =====')
console.log(require.main)
console.log(require.main === module)
console.log(require.cache === module)