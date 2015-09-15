//Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
  while (howMany > 0) {
    arr.shift();
    howMany--;
  };
  return arr;
}

slasher([1, 2, 3], 2);
