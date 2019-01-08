const requestp = require('request-promise')
const $ = require('cheerio')
const _ = require('lodash')

let url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States'
let kissanimeQuery = ''

requestp(url).then((html) => {
  // const data = _.values($('big > a', html)).reduce((acc, cur, i) => {[...acc, cur.attribs]}, [])
  const data = _.values($('big > a', html)).reduce((acc, cur, i) => {
    if(cur.attribs !== undefined) {
      return [...acc, cur.attribs.href]
    } else {
      return [...acc]
    }
  }, [])
  // console.log('Data: ', data)
  console.log('Data: ', data.length)
})
.catch((error) => {
  console.log('Experienced Error while getting html: ', error)
})
