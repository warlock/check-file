# check-file
> Check url is file

[![Build Status](https://travis-ci.org/warlock/check-file.svg?branch=master)](https://travis-ci.org/warlock/check-file) [![Coverage Status](https://coveralls.io/repos/github/warlock/check-file/badge.svg?branch=master)](https://coveralls.io/github/warlock/check-file?branch=master)

https://www.npmjs.com/package/check-file

### Install
```sh
npm install check-file -S
```

### Import module for Node.js:
```js
const checkFile = require('check-file')
```

### Simple check is file:
```js
if (checkFile('file.jpg')) console.log('File found!')
```

### Multiple check files with map:
```js
const url_list = [
  "file.jpg",
  "file.jpeg",
  "file.html",
  "http://asdasjjpgnpm",
  "mpeg.adsa.png.net",
  "h.png.mpge",
  "h.png.mpg",
  "a.middleware"
]

url_list.map(checkFile)
```

#### Returns:
```js
[true, true, false, false, false, false, true, false]
```

### Find files
```js
const url_list = [
  "file.jpg",
  "file.jpeg",
  "file.html",
  "http://asdasjjpgnpm",
  "mpeg.adsa.png.net",
  "h.png.mpge",
  "h.png.mpg",
  "a.middleware"
]

url_list.find(checkFile)
```

#### Returns:
```js
[
  "file.jpg",
  "file.jpeg",
  "h.png.mpg",
]
```

### Simple check is file:
```js
if (!checkFile('file.jpg', ['png'])) console.log('Not png found!')
```


### Find your files

```js
const url_list = [
  "file.jpg",
  "file.jpeg",
  "file.html",
  "http://asdasjjpgnpm",
  "mpeg.adsa.png.net",
  "h.png.mpge",
  "h.png.mpg",
  "a.middleware"
]

const extensions = [
  'jpg',
  'jpeg'
]

url_list.map(file => checkFile(file, extensions))
```

##### Return:
```js
[
  "file.jpg",
  "file.jpeg"
]
```

## License
The MIT License (MIT)
Copyright (c) 2015 Josep Subils (js@js.gl)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
