/**
*Write a JavaScript program where the program takes a random integer 
*between 1 to 10, the user is then prompted to input a guess number. 
*If the user input matches with guess number, the program will display 
*a message "Good Work" otherwise display a message "Not matched".
*/

function guess() {
	var answer = Math.ceil(Math.random() * 10);
	var question = prompt('Guess a number between 1 and 10');
	if (question === answer) {
		alert('\tGood Work');
	} else {
		alert('\tAnswer is ' + answer + '\nYour Guess Does Not Match!');
			};
}
