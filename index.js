let data = require('./data');

data = data.split('\n').reduce((out, row) => {
  let [name, code] = row.split(' ');
  if (!(name in out)) {
    out[name] = code;
  }
  return out;
}, {});

module.exports = function decodeString (str) {
  return str.replace(/&#([0-9]+);/g, (m, num) => {
    return String.fromCharCode(num);
  }).replace(/&([A-Za-z]+);/g, (m, char) => {
    return (char in data ? String.fromCharCode(data[char]) : m);
  });
}
