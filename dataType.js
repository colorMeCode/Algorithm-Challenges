//Write a JavaScript function which accepts an argument and returns the type. Go to the editor
//Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

//My convoluted solution...
function dataType(data) {
	if (typeof data === "object") {
		return "object";
	} else if (typeof data === "boolean") {
		return "boolean";
	} else if (typeof data === "function") {
		return "function";
	} else if (typeof data === 'number') {
		return "number";
	} else if (typeof data === "string") {
		return "string";
	} else {
		return "undefined";
	};
}

//K.I.S.S. Lesson learned..
function getType(data) {
	return typeof data;
}

//W3Resource solution
function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
  }
}
