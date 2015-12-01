var mymodule = require('./mimodule.js');
// since this returns a single function, can call mymodule() directly

var dirname = process.argv[2];
var filext = process.argv[3];
// don't alter filext in here

// must print to console from here (this will be the callback)
function printContents (err, content) {
	// handle any err passed back
	if (err) {
		console.log("Oops, something went wrong!");
	}

	// No filtering allowed - just print each item in the array
	content.forEach(function(filename) {
		console.log(filename);
	});
};

mymodule(dirname, filext, printContents);