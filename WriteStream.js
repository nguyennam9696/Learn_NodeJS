var ws = new (require('stream').Writable)();

var fib = require('./ReadStream');
var count = 0;

ws._write = function (chunk, encoding, next) {
  console.log(chunk.toString());
  if (count++ < 100) {
    setTimeout(next, 100);
  }
};

fib.pipe(ws);