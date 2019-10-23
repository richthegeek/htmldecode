let data = require('./data');

data = data.split('\n').reduce((out, row) => {
  let [name, code] = row.split(' ');
  if (!(name in out)) {
    out[name] = code;
  }
  return out;
}, {});

module.exports = function decodeString (str) {
  return str.replace(/&#(x?[0-9]+);/g, (m, num) => {
    if (num.charAt(0) === 'x') {
      num = parseInt(num.slice(1), 16);
    }
    return String.fromCharCode(num);
  }).replace(/&([A-Za-z]+);/g, (m, char) => {
    char = char.toLowerCase();
    return (char in data ? String.fromCharCode(data[char]) : m);
  });
}
