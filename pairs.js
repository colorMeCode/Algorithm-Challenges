/*
* Problem Statement
*
* Given N integers, count the number of pairs of integers whose difference is K.
*
* Input Format
*
* The first line contains N and K.
* The second line contains N numbers of the set. All the N numbers are unique.
*
* Output Format
*
* An integer that tells the number of pairs of integers whose difference is K.
*
* Constraints: 
* N≤105 
* 0<K<109 
* Each integer will be greater than 0 and at least K smaller than 231−1.
*
*
* Sample Input
*
* 5 2  
* 1 5 3 4 2  
* Sample Output
*
* 3
*/

function pairs(arraySize, k) {
    var counter = 0;
    var array = [];
    for (var i = 1; i < arraySize; i++) {
        array.push(i);
    };
    for (var j = 0, len = array.length; j < len; j++) {
        for (var m = j + 1; m < len; m++) {
            if (array[j] - array[m] === k || array[m] - array[j] === k) {
                counter += 1;
            };
        };
    };
    
    return counter;
}

pairs(5, 2);
