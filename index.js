var def_extensions = require('./files.js')

module.exports = (str, ext_input) => {
  if ([undefined, null, ''].includes(str)) return ''
  const extensions = ext_input && Array.isArray(ext_input) ? ext_input : def_extensions
  var res = false
  str = str.toLowerCase()
  extensions.forEach(e => {
    var reg = new RegExp('\\.' + e + '$')
    if (reg.test(str)) res = true
  })
  return res
}
