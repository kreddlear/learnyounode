var fs = require('fs');

function readContent(callback) {
	// 'utf8' converts it into a string so don't need .toString()
	fs.readFile(process.argv[2], 'utf8', 
		// readFile passes two args to this function, err & data
		function(err,data) {
			if (err) {
				console.log("Something went wrong!");
			};
			// invokes the callback so that it executes
			callback(null, data);
		}
	)
};

function filterContent(err, content) {
	var contentLength = content.split('\n').length;
	console.log(contentLength-1);
};

readContent(filterContent);

// supposedly splitting up the callback and original function is 
// best practice. 

/* Their solution:
     var fs = require('fs')  
     var file = process.argv[2]  
     fs.readFile(file, function (err, contents) {  
       // fs.readFile(file, 'utf8', callback) can also be used  
       var lines = contents.toString().split('\n').length - 1  
       console.log(lines)  
     })
*/