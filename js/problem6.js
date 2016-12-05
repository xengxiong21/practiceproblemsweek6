
/*
6.	Create a function that prompts the user for email addresses one by one,
add them to an array, sort them, and output them all via document.write().
*/

// The function declaires an array, than asks user how many email's they want,
// than asks them to input the emails, than sorts them and outputs via
// document.write

function getUserEmail(){
  var array = [];
  var x = 0;
  var numEmails = parseFloat(prompt("How many emails do you want"));
  for (var x = 0; x < numEmails; x++){
    var eMail = prompt("Enter e mail");
    array.push(eMail);
    }
  var sortArray = array.sort();
  document.write(sortArray);
}
