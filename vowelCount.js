//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
//Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
//Example string : 'The quick brown fox' 
//Expected Output : 5

var vowelCount = function (str) {
	var v = 0;
	var res = str.toLowerCase();
  
	for(var i = 0; i < res.length; i += 1) {
		if(res[i] === 'a' || res[i] === 'e' || res[i] === 'i' || res[i] === 'o' || res[i] === 'u') {
			v += 1;
		};
	};

	return v;
};

//W3Resource method:

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x <str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
