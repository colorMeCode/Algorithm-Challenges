//Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).

function where(arr, num) {
  // Find my place in this sorted array.
  arr = arr.sort();
  for (var i = 0, len = arr.length; i < len; i++) {
    if (num <= arr[i]) {
      arr.splice(i, 0, num);
    } else if (num > arr[i]) {
      arr.push(num);
    };
  };
  return arr.indexOf(num);
}

where([40, 60], 50);
