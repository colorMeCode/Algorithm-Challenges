//Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter 
//being passed and determine if it is an acceptable sequence by either returning the 
//string true or false. The str parameter will be composed of + and = symbols with several 
//letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must 
//be surrounded by a + symbol. So the string to the left would be false. 
//The string will not be empty and will have at least one letter. 

function SimpleSymbols(str) {
  var bool;
  var a = 'a'.charCodeAt(0);
  var z = 'z'.charCodeAt(0);
  str = str.toLowerCase();

  for (var i = 0, len = str.length; i < len; i++) {
    if (str.charCodeAt(i)  >= a && str.charCodeAt(i) <= z) {
      if (str[i - 1] === '+' && str[i + 1] === '+') {
        bool = true;
      } else {
        return false;
      };
    };
  };
  
  return bool;
}

SimpleSymbols('++d+===+c++==+a+');
