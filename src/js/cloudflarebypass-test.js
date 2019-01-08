const CloudflareBypasser = require('cloudflare-bypasser');

let cf = new CloudflareBypasser();

cf.request('https://kissanime.ac/Anime/Baby-Steps')
.then(res => {
  console.log('RES: ', res)
});
