/*
* Using the JavaScript language, have the function SwapCase(str) take the str parameter 
* and swap the case of each character. For example: if str is "Hello World" the output 
* should be hELLO wORLD. Let numbers and symbols stay the way they are. 
*/

var SwapCase = function(str) {

  var i,
      len;

  str = str.split('');

  for (i = 0, len = str.length; i < len; i += 1) {
    if (str[i] === str[i].toUpperCase()) {
      str.splice(i, 1, str[i].toLowerCase());
    } else {
      str.splice(i, 1, str[i].toUpperCase());
    }
  }

  return str.join('');
};

SwapCase("Hello World");
