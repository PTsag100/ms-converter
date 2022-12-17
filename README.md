## ms-converter

Returns the time given (minutes,hours, etc...) to milliseconds, and is an integer that does not exceed the JavaScript MAXIMUM_SAFE_INTEGER

## Usage

```js
const msc = require("ms-conversion");

console.log(msc.seconds(10)); //=> 10.000
console.log(msc.minutes(5)); //=> 300.000
console.log(msc.hours(1)); //=> 3.600.000
```
