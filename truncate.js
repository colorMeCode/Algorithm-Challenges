/*
* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
* Return the truncated string with a '...' ending.
* 
* Note that the three dots at the end add to the string length.
*/

function truncate(str, num) {
  if (typeof str === 'string') {
    if (str.length > num) {
      str = str.slice(0, num - 3);
      str = str + '...';
    };
  };
  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
