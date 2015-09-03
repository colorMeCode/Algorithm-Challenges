/**Problem Statement:

You're given an array containing integer values. You need to print the fraction of count of positive numbers, 
negative numbers and zeroes to the total numbers. Print the value of the fractions correct to 3 decimal places.

Output Format:

Output three values on different lines equal to the fraction of count of positive numbers, 
negative numbers and zeroes to the total numbers respectively correct to 3 decimal places.

Sample Input:

6
-4 3 -9 0 4 1  

Sample Output:

0.500
0.333
0.167
*/


function processData(input) {
  var len = input.length;
  var i;
  var positive = positive || 0;
  var negative = negative || 0;
  var zero = zero || 0;
    
  for (i = 0; i < len; i += 1) {
    if (input[i] > 0) {
        positive += 1;
    } else if (input[i] < 0) {
        negative += 1;
    } else if (input[i] === 0) {
        zero += 1;
    };
  };
  console.log((positive / len).toFixed(3))
  console.log((negative / len).toFixed(3))
  console.log((zero / len).toFixed(3));  
};


processData([-4, 3, -9, 0, 4, 1]); 
