//Implement an algorithm to determine if a string has all unique characters. 
//What if you cannot use additional data structures?

function unique(string) {
  string = string.toLowerCase();
  for (var i = 0, l = string.length; i < l; i++) {
    if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
      return alert("String does not contain all unique characters!");
    };
  };
  return alert("String contains all unique characters!");
}

unique("unique");
