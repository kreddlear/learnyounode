var fs = require('fs');

var path = require('path');

// exports one function that takes 3 args:
// dirname, filext, callback

// note: filext must = process.argv[3], can't be altered in mim.js

function filterContent(dirname, filext, callback) {
	fs.readdir(dirname, 
		// readdir passes 2 args to this function, err & array of filenames
		function(err, data) {
			if (err) {
				return callback(err);
			}

			// filter stuff out by filext
			// save it in filteredArray
			var filextFull = '.' + filext;
			var filteredArray = [];

			data.forEach(function(filename) {
				if (path.extname(filename) === filextFull) {
					filteredArray.push(filename);
				}
			});

			// invoke the callback, pass in already filtered array
			callback(null, filteredArray);
		}
	)

};

// must invoke it using callback(null, data)

// data will be your filtered list of files/array

// don't print directly to console from module file

module.exports = filterContent;