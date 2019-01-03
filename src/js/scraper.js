const requestp = require('request-promise')
const $ = require('cheerio')
const _ = require('lodash')

let url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States'
let kissanimeQuery = ''

// requestp(url).then((html) => {
//   const data = _.map(_.values($('big > a', html)), (el) => {
//     console.log(_.values(el))
//     if(_.values(el).includes('href')) {
//       // console.log('El: ', el.attribs.href)
//     }
//   })
//   // console.log('Data: ', data)
//   console.log('Data: ', data.length)
// })
// .catch((error) => {
//   console.log('Experienced Error while getting html: ', error)
// })
//
requestp(url).then((html) => {
  const data = _.map(_.values($('big > a', html)), (el) => {
    console.log(_.values(el))
    if(_.values(el).includes('href')) {
      // console.log('El: ', el.attribs.href)
    }
  })
  // console.log('Data: ', data)
  console.log('Data: ', data.length)
})
.catch((error) => {
  console.log('Experienced Error while getting html: ', error)
})
