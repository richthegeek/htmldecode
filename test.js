const assert = require('assert');
const decode = require('./');

// verify all supported formats
assert.equal(decode('&lt;'), '<');
assert.equal(decode('&PoUnD;'), '£');
assert.equal(decode('&#64;'), '@');
assert.equal(decode('&#x0040;'), '@');

// verify that multi-replacement works
assert.equal(decode('&pound; &cent; &dollar; &yen; &#8364;'), '£ ¢ $ ¥ €');

// just to verify that nothing crashes
Object.keys(decode.chars).forEach((char) => {
  assert.equal(decode(`&${char};`), String.fromCharCode(decode.chars[char]));
});

console.log('All tests OK');