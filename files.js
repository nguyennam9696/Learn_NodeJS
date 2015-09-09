var fs = require('fs');

// fs.readFile('files.js', function (err, data) {
//   console.log(data.toString());
// });

// fs.writeFile('text.txt', 'this is the content', function (err) {
//   if (err) throw err;
//   console.log(fs.readFileSync('text.txt').toString());
// });

// var readStream = fs.createReadStream('files.js');

// readStream.pipe(process.stdout);

var writeStream = fs.createWriteStream('text.txt')
var fib = require('./ReadStream.js');

fib.pipe(writeStream);

// Run in terminal "cat text.txt"