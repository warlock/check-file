var cfile = require('../index.js')
var chai = require('chai')
var arr = [
  "file.jpg",
  "file.html",
  "http://asdasjjpgnpm",
  "mpeg.adsa.png.net",
  "h.png.mpge",
  "h.png.mpg",
  "h.pngmpg",
  "a.middleware"
]

describe("Checking multiple values", () => {
  it('Returns a boolean', () => {
    arr.forEach((e) => {
      chai.assert.isBoolean(cfile(e))
    })
  })

  it('Returns a 2 files', () => {
    var files = arr.filter(cfile)
    chai.assert.lengthOf(files, 2)
  })

  it('Returns a 6 no file', () => {
    var nofiles = arr.filter((e) => !cfile(e))
    chai.assert.lengthOf(nofiles, 6)
  })
})
