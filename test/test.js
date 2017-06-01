/*global describe it*/
var cfile = require('../index.js');
var chai = require('chai');
var arr = [
  "file.jpg",
  "file.html",
  "http://asdasjjpgnpm",
  "mpeg.adsa.png.net",
  "h.png.mpge",
  "h.png.mpg",
  "h.pngmpg",
  "a.middleware"
];

describe("Checking multiple values", function () {
  it('Returns a boolean', function  () {
    arr.forEach(function (e) {
      chai.assert.isBoolean(cfile(e));
    });
  });

  it('Returns a 2 files', function () {
    var files = arr.filter(cfile);
    chai.assert.lengthOf(files, 2);
  });

  it('Returns a 6 no file', function () {
    var nofiles = arr.filter(function (e) {
      return !cfile(e);
    })
    chai.assert.lengthOf(nofiles, 6);
  });
});
