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

      rs.push('' + c);
    }, 100);
  } else {
    this.push(null);
  }
}

module.exports = rs;