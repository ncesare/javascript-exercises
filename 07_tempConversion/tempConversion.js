const ftoc = function(tempF) {
  
  return parseFloat(((tempF-32)*0.5556).toFixed(1));
};

const ctof = function(tempC) {
  return parseFloat(((tempC)*1.8+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
