var cfile= require('../index.js')
var arr = [
"file.jpg",
"file.html",
"http://asdasjjpgnpm",
"mpeg.adsa.png.net",
"h.png.mpge",
"h.png.mpg",
"a.middleware"
]

arr.forEach((e) => {
	if (cfile(e)) console.log(`${e} is file.`)
})
