
exports.min = function min (array) {
 if(array && array.length) {
 	return Math.min(...array);
 } else {
 	return 0;
 }
}

exports.max = function max (array) {
  if(array && array.length) {
  	return Math.max(...array);
 } else {
 	return 0;
 }
}

exports.avg = function avg (array) {
  if(array && array.length) {
  	let average = array.reduce((a,b) => a + b, 0) / array.length;
  	return average;
 } else {
 	return 0;
 }
}
