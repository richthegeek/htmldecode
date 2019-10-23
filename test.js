const assert = require('assert');
const decode = require('./');

assert.equal(decode('&lt;'), '<');
assert.equal(decode('&PoUnD;'), '£');
assert.equal(decode('&#64;'), '@');
assert.equal(decode('&#x0040;'), '@');

assert.equal(decode('&pound; &cent; &dollar; &yen; &#8364;'), '£ ¢ $ ¥ €');

console.log('All tests OK');