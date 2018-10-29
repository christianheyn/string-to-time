# string-to-time

```
const { stringToTime } = require('string-to-time');

const calculated = stringToTime('4hours for some stuff, 1.2days plus 2 x 35minutes for somthing else...');
console.log(calculated);
// --> { d: 1, h: 6, m: 46 }
```