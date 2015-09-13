//Check if a string (first argument) ends with the given target string (second argument).

function end(str, target) {

  if (str.substr(str.length-1) === target) {
    return true;
  }
  
  if (target.length > 1) {
    str = str.split(' ');
    if (str[str.length - 1] === target) {
      return true;
    };
  };

  return false;
}

end('Bastian', 'n');
end('People will find a way', 'way');
