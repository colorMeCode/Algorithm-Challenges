//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  var match = arr[0].toLowerCase();
  var compare = arr[1].toLowerCase().split('');
  for (var i = 0, l = compare.length; i < l; i++) {
    if (match.indexOf(compare[i]) < 0) {
      return false;
    };
  };

  return true;
}

mutation(['Hello', 'hey']);
mutation(['Mary', 'Aarmy']);
