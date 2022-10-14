var fs = require('fs');

//var data = "\nLearn Node.js";

// Append data to file
fs.appendFile('fileapp.txt', demofile.txt, 'utf8',

	// Callback function
	function(err) {
		if (err) throw err;

		// If no error
		console.log("Data is appended to file successfully.")
});
/*
O/P:
D:\20761A05H7>node append.js
Data is appended to file successfully.
*/

