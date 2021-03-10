
exports.min = function min (array) {
  if ((array === undefined) || (array.length == 0))
//Аргумент, который не был передан, приходит как неопределенный.
//Тестирование со строгим равенством против нуля не удастся.
//Вы должны использовать строгое равенство с неопределенным.
	  return 0;
  else
	  return array.sort((a, b) => a - b)[0];
//https://learn.javascript.ru/array-methods
//https://learn.javascript.ru/arrow-functions-basics
}

exports.max = function max (array) {
  if ((array === undefined) || (array.length == 0))
	  return 0;
  else
	  return array.sort((a, b) => b - a)[0];
}

exports.avg = function avg (array) {
  if ((array === undefined) || (array.length == 0))
	  return 0;
  else
	  return array.reduce((a, b) => (a + b)) / array.length;
}
