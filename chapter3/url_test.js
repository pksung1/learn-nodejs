const {URL} = require('url')

const myURL = new URL('https://www.gilbut.co.kr/search/search_book_list?code=002000000&sub_code=&view_mode=&list_size=15&order=date&descending=true&page=3')

console.log(myURL)
console.log(myURL.searchParams.append('mycode', 'test'))
console.log(myURL)
console.log(myURL.searchParams.delete('mycode'))
console.log(myURL)