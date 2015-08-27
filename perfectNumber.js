/**
* Write a JavaScript function which says whether a number is perfect. Go to the editor
* According to Wikipedia : In number theory, a perfect number is a positive integer that 
* is equal to the sum of its proper positive divisors, that is, the sum of its positive 
* divisors excluding the number itself (also known as its aliquot sum). Equivalently, a 
* perfect number is a number that is half the sum of all of its positive divisors (including itself).
* Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, 
* and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: 
* ( 1 + 2 + 3 + 6 ) / 2 = 6. 
* The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
* This is followed by the perfect numbers 496 and 8128.
*/

var perfectNumber = function(number) {
	var num = [];
	var sum = 0;
	for (var i = number; i <= number && i !== 0; i -= 1) {
		if (number % i === 0) {
			num.push(i);
		};

		for (var j = 0; j < num.length; j += 1) {
			sum += num[j];
		};

			if (sum / 2 === number) {
				sum = true;
			} else {
				sum = false;
		};
	};

	return sum;
};


//W3Resource solution:
function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number)
        {
       alert("It is a perfect number.");
        } 
     else
        {
       alert("It is not a perfect number.");
        }   
 } 
is_perfect(28); 



