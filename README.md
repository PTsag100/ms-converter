## ms-conversion

Returns the time given (minutes,hours, etc...) to milliseconds, and is an integer that does not exceed the JavaScript MAXIMUM_SAFE_INTEGER

## Usage

### Some examples

```js
const msc = require("ms-conversion");

console.log(msc.seconds(10)); //=> 10.000
console.log(msc.minutes(5)); //=> 300.000
console.log(msc.hours(1)); //=> 3.600.000
```

### Using ms-conversion for cookies

```js
const { days, hours } = require("ms-conversion");

res.cookie("token", `Bearer ${token}`, {
  httpOnly: true,
  maxAge: days(20) + hours(12), //=> cookie expires in 20 days and 12 hours
});
```
