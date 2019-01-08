const requestp = require('request-promise');
const $ = require('cheerio');
const _ = require('lodash');
const CloudflareBypasser = require('cloudflare-bypasser');

const urlPrefix = 'https://kissanime.ac/Anime/';
let kissanimeQuery = 'Baby-Steps';
let cf = new CloudflareBypasser();

try {
  cf.request('https://kissanime.ac/Anime/Baby-Steps', {
    delay: 6000
  })
  .then(res => {
    console.log('RES: ', res)
  });
} catch(error) {
  console.log('Experienced error whilst trying to access URL')
}
