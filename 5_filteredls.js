var fs = require('fs');

var path = require('path');

var dirname = process.argv[2];

// Won't be prefixed, so added '.'
var filext = '.' + process.argv[3];

function readDirectoryContents (callback) {
	fs.readdir(dirname, 
		// readdir passes 2 args to this function, err & array of filenames
		// note: don't need 'utf8'
		function(err, data) {
			if (err) {
				console.log("Oops, something went wrong!")
			}
			// invokes the callback
			callback(null, data);

		}
	)
};

function filterContents (err, content) {
	// For each item in the content array, check it against filext
	// If it matches, print the item
	content.forEach(function(filename) {
		if (path.extname(filename) === filext) {
			console.log(filename);
		}
	});
};

readDirectoryContents(filterContents);

/* Their solution:
     var fs = require('fs')  
     var path = require('path')  
     fs.readdir(process.argv[2], function (err, list) {  
       list.forEach(function (file) {  
         if (path.extname(file) === '.' + process.argv[3])  
           console.log(file)  
       })  
     })  
*/
