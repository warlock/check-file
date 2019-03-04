/*global describe it*/
var cfile = require('../index.js')
var chai = require('chai')
var files = [
  'file.jpg',
  'file.jpeg',
  'file.html',
  'http://asdasjjpgnpm',
  'mpeg.adsa.png.net',
  'h.png.mpge',
  'h.png.mpg',
  'h.pngmpg',
  'a.middleware'
]

describe('Checking multiple values', () => {
  it('Returns a boolean', () => {
    files.forEach(file => {
      chai.assert.isBoolean(cfile(file))
    })
  })

  it('Returns a 3 files', () => {
    var files_filtered = files.filter(cfile)
    chai.assert.lengthOf(files_filtered, 3)
  })

  it('Returns a 6 no file', () => {
    var nofiles = files.filter(e => !cfile(e))
    chai.assert.lengthOf(nofiles, 6)
  })

  it('Bolean fixed files', () => {
    const extensions = ['jpg', 'jpeg']
    chai.assert.isBoolean(cfile('bueno.jpg', extensions))
    chai.assert.isTrue(cfile('bueno.jpg', extensions))
  })

  it('Check list files', () => {
    const extensions = ['jpg', 'jpeg']
    var nofiles = files.filter(file => cfile(file, extensions))
    chai.assert.lengthOf(nofiles, 2)
  })
})
