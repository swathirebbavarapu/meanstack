const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
(async () => {
  try {
    var data = await readFile('demofile.txt');
    console.log('File readed successfully with promisify and async/await!');
	console.log(data.toString());
  } catch (err) {
    console.log(err);
  }
})();


/*

D:\20761A05H7>node readr.js
File readed successfully with promisify and async/await!
hi welcome to mst lab
*/