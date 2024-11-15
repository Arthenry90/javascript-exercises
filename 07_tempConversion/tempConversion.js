const convertToCelsius = function(temperature) {
 //c = (f-32) / 1,8;

  let roundTemp = (temperature - 32) / 1.8

  Math.round(roundTemp)
  return roundTemp;

};

const convertToFahrenheit = function(temperature) {
//c * 1,8 + 32

  let roundTemp = temperature * 1.8 + 32;
  Math.round(roundTemp);
  return roundTemp;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
