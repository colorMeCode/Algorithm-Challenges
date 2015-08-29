//Write a function for searching JavaScript arrays with a binary search. Go to the editor
//Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.


function binarySearch(array, target, beg, end) {

  beg = beg || 0;

  if (end === undefined) {
  	end = array.length-1;
  }

  var mid = beg + Math.floor((end - beg) / 2);
  var num = array[mid];

	if (target === num) {
		return mid;
	} else if (beg >= end) {
		return -1
	} else if (target > num) {
		return binarySearch(array, target, mid+1, end);
	} else {
		return binarySearch(array, target, beg, mid-1);	
	};
}

var numList = [0,1,2,3,4,5,6,7,8,9];
console.log(binarySearch(numList, 9));


//W3Resource method:

function array_binarySearch(narray, delement) {  
   var mposition = Math.floor(narray.length / 2);  
  
   if (narray[mposition] === delement){  
      return mposition;  
   }  
   else if (narray.length === 1)   
   {  
      return null;  
   }  
   else if (narray[mposition] < delement) {  
      var arr = narray.slice(mposition + 1);  
      var res = array_binarySearch(arr, delement);  
      if (res === null)  
      {  
         return null;  
      }  
      else {  
         return mposition + 1 + res;  
      }  
   }  
   else {  
      var arr1 = narray.slice(0, mposition);  
      return array_binarySearch(arr1, delement);  
   }  
}  
  
 var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];  
 console.log(array_binarySearch(myArray, 6));  
