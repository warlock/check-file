var ext = require('./files.js');

module.exports = function (str) {
  var res = false;
  str = str.toLowerCase()
  ext.forEach(function (e) {
    var reg = new RegExp(`\\.${e}\$`);
    if (reg.test(str)) res = true;
  })
  return res;
};
