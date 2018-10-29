# string-to-time

Get time information from strings

```js
const { stringToTime } = require('string-to-time');

const calculated = stringToTime('4hours for some stuff, 1.2days plus 2 x 35 minutes for somthing else...');
console.log(calculated);
// --> { d: 1, h: 6, m: 46 }
```

The following units are working when given next to a number:

- for **minutes**: `m`, `minute`, `minutes`
- for **hour**: `h`, `hour`, `hours`
- for **days**: `d`, `day`, `days`

Furthermore it's possible to add one multiplation before a unit:
`'2 x 35 minutes'` => `{ d: 0, h: 1, m: 10 }`