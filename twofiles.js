var fs = require('fs');

var data = fs.readFileSync('fileapp.txt');

// Append data to file
fs.appendFile('demofile.txt', data, 'utf8',

	// Callback function
	function(err) {
		if (err) throw err;

		// If no error
		console.log("Data is appended to file successfully.")
});


