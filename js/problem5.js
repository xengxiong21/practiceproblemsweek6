
/*

5.	Given an array [0, 1, 2, 3, 4, 5], get the first element, last element,
and third element.  Change the second element to 6.  Insert [100, 101, and 102]
at array index 3.  Afterwards, get the first 5 elements only.

*/

// This is the array
var array = [0, 1, 2, 3, 4, 5];

// "get" the first, last and third elements.  Not sure what you mean by get.
document.write(array[0] + "<br>");
document.write(array[5] + "<br>");
document.write(array[2] + "<br>");

// Change the second element to 6
array[1] = 6;
document.write(array);
document.write("<br>");

// Insert [100, 101, and 102] at array index 3.
// ** Didn't know if you meant insert another array inside index 3 or insert the
// ** string or the number values.
array.splice(2, 0, "[100, 101, and 102]");
document.write(array + "<br>");

// Get the first 5 elements only
var x = array.slice(0, 5);
document.write(x);
