const sum = function(a) {
  let total = 0;
  while(a > 0) {
    total += a%10;
    a = Math.floor(a/10);
  }
  return total;
}

const isHigher = function(a, b) {
  sumResultItem = sum(a);
  sumArrayItem = sum(b);
  return sumResultItem === sumArrayItem ?
    (a > b ? true : false) :
      (sumResultItem > sumArrayItem ? true : false);
}

module.exports = {
  sum: sum,
  isHigher: isHigher,
}