# time-string

```
const { timeString } = require('time-string);

const calculated = timeString('4hours for some stuff, 1.2days plus 2 x 35minutes for somthing else...');
console.log(calculated);
// --> { d: 1, h: 6, m: 46 }
```