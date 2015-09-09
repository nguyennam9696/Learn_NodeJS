// Node's path module
var path = require('path');

// Clean out our path to display
path.normalize('/this//is/a/something/../././path');
// Output: /this/is/a/path
path.join('this', 'is', '/a/', 'path')
// Output: this/is/a/path
path.resolve('/this', 'is/what', '../', 'a', 'path');
// Output: /this/is/a/path
path.isAbsolute('/maybe');
path.basename('/this/is/a/path.txt');
// Output: path.txt
path.parse('/this/is/a/path.txt');
// Output: path.parse('/this/is/a/path.txt');
 // { root: '/',
 //  dir: '/this/is/a',
 //  base: 'path.txt',
 //  ext: '.txt',
 //  name: 'path' }
path.format({  dir: '/this/is/a', base: 'path.txt' })
// Output: '/this/is/a/path.txt'