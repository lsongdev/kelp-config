## kelp-config

:sparkles: Simple light-weight configuration for kelp 

![npm](https://badge.fury.io/js/kelp-config.png) 
[![Build Status](https://travis-ci.org/song940/kelp-config.svg?branch=master)](https://travis-ci.org/song940/kelp-config)

### Installation
````
$ npm install kelp-config --save
````

### Example

config/default.js

```js
module.exports = {
  name: 'default'
};
```

config/test.js

```js
module.exports = {
  name: 'test'
};
```

config/production.js

```js
module.exports = {
  name: 'production'
};
```


````bash
~$ node
> require('kelp-config').name //-> default
````

````bash
~$ NODE_ENV=production node
> require('kelp-config').name //-> production
````

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2016 lsong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
