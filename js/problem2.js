
var num = 0;

while(num < 101){
	isEven(num);
	document.write(num);
	num ++;
}

// Never use return unless it is inside a function


function isEven(x){
	if(x % 2 === 0){
		document.write("<p> Fizz ");
	}
	else{
		document.write("<p> Buzz ");
	}
}	

/*

function isOdd(x){
	if(x & 2 !== 0){
		document.write("This number is odd");
	}
}

*/
