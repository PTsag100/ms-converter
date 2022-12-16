function MsConverter() {}
function isValidNumber(value) {
  const n = Math.abs(value);
  if (!isNumber(n)) {
    throw new TypeError("expected a number");
  }
  if (!Number.isInteger(n)) {
    throw new Error("expected an integer");
  }
  if (!Number.isSafeInteger(n)) {
    throw new Error("value exceeds maximum safe integer");
  }
}
MsConverter.prototype.seconds = (time = 1) => {
  isValidNumber(time);
  return time * 1000;
};
MsConverter.prototype.minutes = (time = 1) => {
  isValidNumber(time);
  return time * new MsConverter().seconds(60);
};
MsConverter.prototype.hours = (time = 1) => {
  isValidNumber(time);
  return time * new MsConverter().minutes(60);
};
MsConverter.prototype.days = (time = 1) => {
  isValidNumber(time);
  return time * new MsConverter().hours(24);
};
MsConverter.prototype.weeks = (time = 1) => {
  isValidNumber(time);
  return time * new MsConverter().days(7);
};
MsConverter.prototype.months = (time = 1) => {
  isValidNumber(time);
  return time * new MsConverter().days(30);
};
MsConverter.prototype.years = (time = 1) => {
  isValidNumber(time);
  return time * new MsConverter().days(365);
};

module.exports = new MsConverter();
