const requestp = require('request-promise');
const $ = require('cheerio');
const _ = require('lodash');
const CloudflareBypasser = require('cloudflare-bypasser');

const urlPrefix = 'https://kissanime.ac/Anime/';
let kissanimeQuery = 'Baby-Steps';
let cf = new CloudflareBypasser();

cf.request('https://kissanime.ac/Anime/Baby-Steps', {
  delay: 4000
})
.then(res => {
  console.log('RES: ', res)
});

// const callRequest = (query) => {
//   const url = urlPrefix.concat('', query);
//   console.log('URL: ', url);
//   cf.request({
//     url: url,
//     delay: 5000,
//   })
//   .then(html) => {
//     console.log('HTML: ', html)
//   }
//   .catch((error) => {
//     console.log('Experienced error while getting html: ', error)
//   })
// }

// const callRequest = (query) => {
//   const url = urlPrefix.concat('', query)
//   console.log('URL: ', url)
//   requestp(url).then((html) => {
//     console.log('HTML: ', html)
//   })
//   .catch((error) => {
//     console.log('Experienced error while getting html: ', error)
//   })
// }

// callRequest(kissanimeQuery)

