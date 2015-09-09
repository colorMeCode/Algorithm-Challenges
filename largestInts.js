//Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.

//OPTIMIZE ME ... O(n²)

function largestInts(arr) {
 var temp = 0;
 var maxValues = [];

  for (var i = 0, l = arr.length; i < l; i += 1) {
   for (var j = 0, m = arr[i].length; j < m; j += 1) {
     if (arr[i][j] > temp) {
       temp = arr[i][j];
     };

     if (arr[i][j] === arr[i][m - 1]) {
     maxValues.push(temp);
     };
   };
 };

  return largestInts;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
