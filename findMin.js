//find the smallest number in a random generated array of numbers

function findMin(array) {
  var min;

  if (Array.isArray(array)) {
    min = array[0];

    for (var i = 1, l = array.length; i < l; i += 1) {
      if(array[i] < min) {
        min = array[i];
      };
    };
  };

  return min;
}

findMin([10,9,8,7,6,5,4,3,2,1,0]);
