function MsConversion() {}

MsConversion.prototype.seconds = (time = 1) => {
  isValidNumber(time);
  return time * 1000;
};
MsConversion.prototype.minutes = (time = 1) => {
  isValidNumber(time);
  return isSafeNumber(time * 1000 * 60);
};
MsConversion.prototype.hours = (time = 1) => {
  isValidNumber(time);
  return isSafeNumber(time * 1000 * 60 * 60);
};
MsConversion.prototype.days = (time = 1) => {
  isValidNumber(time);
  return isSafeNumber(time * 1000 * 60 * 60 * 24);
};
MsConversion.prototype.weeks = (time = 1) => {
  isValidNumber(time);
  return isSafeNumber(time * 1000 * 60 * 60 * 24 * 7);
};
MsConversion.prototype.months = (time = 1) => {
  isValidNumber(time);
  return isSafeNumber(time * 1000 * 60 * 60 * 24 * 7 * 30);
};
MsConversion.prototype.years = (time = 1) => {
  isValidNumber(time);
  return isSafeNumber(time * 1000 * 60 * 60 * 24 * 7 * 30 * 365);
};

function isSafeNumber(n) {
  if (Number.isSafeInteger(n)) return n;
  else throw new Error("value exceeds maximum safe integer");
}

function isValidNumber(value) {
  const n = Math.abs(value);
  if (typeof n != "number") {
    throw new TypeError("expected a number");
  }
  if (!Number.isInteger(n)) {
    throw new Error("expected an integer");
  }
  if (!Number.isSafeInteger(n)) {
    throw new Error("value exceeds maximum safe integer");
  }
}

module.exports = new MsConversion();
