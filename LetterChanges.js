//Using the JavaScript language, have the function LetterChanges(str) take the str parameter being 
//passed and modify it using the following algorithm. Replace every letter in the string with the 
//letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every 
//vowel in this new string (a, e, i, o, u) and finally return this modified string. 

function LetterChanges(str) { 
  // code goes here  
  var newLetter;
  var arr;
  str = str.toLowerCase();
  arr = str.split('');
  
  for (var i = 0, len = str.length; i < len; i++) {
    if (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97) {
      if (str[i] === "z") {
        newLetter = str.charCodeAt(i);
        newLetter = String.fromCharCode(newLetter - 25);
        arr.splice(i, 1, newLetter);
      } else {
      newLetter = str.charCodeAt(i);
      newLetter = String.fromCharCode(newLetter + 1);
      arr.splice(i, 1, newLetter);
      };
    };
  };
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] == "a" || arr[j] == "e" || arr[j] == "i" || arr[j] == "o" || arr[j] == "u") {
      arr.splice(j, 1, arr[j].toUpperCase());
    };
  };

  str = arr.join('');
  return str; 
}

LetterChanges("fun times!");
