//Write a function that splits an array (first argument) into groups 
//the length of size (second argument) and returns them as a multidimensional array.

function chunk(arr, size) {
  var newArr = [];
  var n = Math.ceil(arr.length / size);
  var m = m || 0;
  
  //populate newArr with subarrays
  for (var j = 0; j < n; j++) {
     newArr.push([]);
  };
  
  //push original elements into subarray until subarray reaches size limit
  //then push original elements into next subarray
  for (var i = 0, l = arr.length; i < l; i++) {

    if (newArr[m].length !== size) {
      newArr[m].push(arr[i]);
    } else if (newArr[m].length === size) {
      m+=1;
      newArr[m].push(arr[i]);
    };
  };

  return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2);
