
// sum 1 to 100 with while loop

var num = 0;
var sum = 0;

while(num < 101){
	sum = sum + num;
	num ++;
}

document.write(sum);
document.write("<br>");

// sum 1 to 100 with do while loop

var num2 = 0;
var sum2 = 0;

do{
	sum2 = sum2 + num2;
	num2 ++;
}
while(num2 < 101);

document.write(sum2);
document.write("<br>");

// sum 1 to 100 with for loop

var sum3 = 0;

for(var num3 = 0; num3 < 101; num3 ++){
	sum3 = sum3 + num3;
}

document.write(sum3);