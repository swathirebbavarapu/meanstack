const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
(async () => {
  try {
    await writeFile('demofile.txt', `Hey @ ${new Date()}`);
    console.log('File created successfully with promisify and async/await!');
  } catch (err) {
    console.log(err);
  }
})();
/* output:
before executing demofile.txt contains:

	hi hello how are you



D:\H7>node file.js
File created successfully with promisify and async/await!

after executing demofile.txt contains:
		
		Hey @ Mon Sep 19 2022 15:34:59 GMT+0530 (India Standard Time)
*/
