// const wheels = 4;
// const lamps = 2;
// const regPlate = 'abc';
// const auto = require('./auto')(wheels, lamps, regPlate);
const utilities = require('./utilities');
module.exports = function(arr) {
  var result = [];
  var total = 0;
  var sumArrayItem = 0;
  var sumResultItem = 0;
  var isHigh = false;
  for(let i = 0; i < arr.length; i++) {
    if(i == 0) {
      result.push(arr[i]);
      continue;
    }
    for(let j = 0; j < result.length; j++) {
      isHigh = utilities.isHigher(result[j], arr[i]);
      if(isHigh) {
        result.splice(j, 0, arr[i]);
        break;
      }
    }
    if(!isHigh) result.push(arr[i]);
  }
  return result;
}