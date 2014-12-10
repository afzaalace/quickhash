# Node [quickhash](https://www.npmjs.org/package/quickhash)

Simple and lean hashing for strings.

[![NPM](https://nodei.co/npm/quickhash.png?downloadRank=true&downloads=true)](https://nodei.co/npm/quickhash.png?downloadRank=true&downloads=true)

## Installation ##

Use NPM to install:

    npm install quickhash

## Usage

    var quickhash = require('quickhash');

    console.log(quickhash('http://www.facebook.com'));

### Response Data

    quickhash will return an unsigned integer. i.e. 0 <= hash <= 4294967295

## License ##

(The MIT License)

Copyright (c) 2014 Afzaalace;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.