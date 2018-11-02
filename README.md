# string-to-time
[![Build Status](https://travis-ci.org/christianheyn/string-to-time.svg?branch=master)](https://travis-ci.org/christianheyn/string-to-time)

Get time information from strings

## Install
```sh
$ npm i string-to-time
```


## Use
```js
const { stringToTime } = require('string-to-time');

const estimation = '4 hours for some stuff, 1.2 days plus 2 x 35 minutes for somthing else...'
const time = stringToTime(estimation);

console.log(time);
// --> { d: 1, h: 6, m: 46 }
```

The following units are working when given next to a number:

- for **minutes**: `m`, `minute`, `minutes`
- for **hours**: `h`, `hour`, `hours`
- for **days**: `d`, `day`, `days`

Furthermore it's possible to add one multiplication before a unit:
`'2 x 35 minutes'` => `{ d: 0, h: 1, m: 10 }`
