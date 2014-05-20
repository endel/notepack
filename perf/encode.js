var msgpack = require('../');
var msgpackJs = require('msgpack-js');
var msgpackNode = require('msgpack');
var data = require('./data');

var Benchtable = require('benchtable');

console.log('Encoding:');

var suite = new Benchtable;

suite
.addFunction('@coinative/msgpack', function (x) {
  msgpack.encode(x);
})
.addFunction('msgpack-node', function (x) {
  msgpackNode.pack(x);
})
.addFunction('msgpack-js', function (x) {
  msgpackJs.encode(x);
})

.addInput('small', [data.small])
.addInput('medium', [data.medium])
.addInput('large', [data.large])

.on('complete', function () {
  console.log(this.table.toString());
})
.run({ async: true });
