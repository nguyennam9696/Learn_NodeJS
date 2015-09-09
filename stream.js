var stream = require('stream');

var a = 0;
var b = 1;

var rs = new stream.Readable();
rs._read = function () {
  if (b <= 200000) {
    setTimeout(function () {

      var c = a + b;

      a = b;
      b  = c;

      rs.push('' + c + '\n');
    }, 100);
  } else {
    this.push(null);
  }
}

rs.pipe(process.stdout);
process.stdout.on('error', process.exit);