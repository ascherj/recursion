// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';

  if (typeof obj === 'string') {
    result += '\"' + obj + '\"';

  } else if (obj === null || typeof obj !== 'object') {
    result += obj;

  } else if (Array.isArray(obj)) {
    result += '[';

    obj.forEach(function(element, index, array) {
      result += stringifyJSON(element);
      if (index !== array.length - 1) {
        result += ',';
      }
    });

    result += ']';

  } else {
    result += '{';

    var length = Object.keys(obj).length;
    var i = 0;
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        if (i !== length - 1) {
          result += ',';
        }
        i++;
      }
    }
    
    result += '}';
  }

  return result;
};
