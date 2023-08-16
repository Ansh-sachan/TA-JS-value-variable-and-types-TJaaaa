// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

const num =prompt(`Enter a number:  `);
if (num % 2 == 0 ){
  alert(`Number Is Even`);
}
 else if (num %2 !== 0){
  alert(`Number Is Odd`); 
}


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

const number1 = prompt(`Enter First number`);
const number2 = prompt(`Enter Second number`);

if (number1 === number2){
  alert(`Both NUmbers are equal`)
} else if(number1>number2){
  alert(`First number is greater`)
} else if(number1<number2){
  alert(`Second number is greater`)
}


// 3. Convert the above code using`?` terniary operator

number1<number2?
alert(`Number2 is greater`):
alert(`Number1 is greater`)

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/


const houseName = prompt(`Enter your House Name: `)

if(houseName===`stark`){
  alert(`Winter is coming`);
} else if (houseName===`lannister`){
  alert(`A Lannister always pays his debt`)
} else{
  alert(`All men must die`)
}

// 5. Convert the above code using`?` terniary operator
const houseName2 = prompt(`Enter your house name :`)
houseName2===`stark`?alert(`Winter is coming`) : houseName2===`lannister`?alert(`A Lannister always pays his debt`) : alert(`All men must die`)

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let monthNumber =prompt(`Enter no. of month : `);
if (monthNumber === "1" || monthNumber ==="3" || monthNumber ==="5" || monthNumber ==="7" || monthNumber ==="8" || monthNumber ==="10" || monthNumber ==="12"){
  alert(`31`)
} else if (monthNumber === "2"){
  alert(`28 and in leap year it is 29`)
} else {
  alert(`30`)
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary = prompt(`Enter the salary: `)
if (salary <= 20000){
  alert (`your in hand salary is ${ salary - salary/10}`)
} else if (salary <= 40000){
  alert(`your in hand salry is ${salary - salary/20}`)
} else if(salary > 50000){
  alert(`your in hand salary is ${salary - salary/30}`)
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks =prompt (`Enter your marks :`)
if (marks >100 ){
  alert(`Marks can't be greater than 100`);
} else if  (marks > 80 && marks < 100){
  alert(`Grade A`);
} else if ( marks >50 && marks<80 ){
  alert(`Grade B`);
} else if (marks >0 ){
  alert(`Grade D`);
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let outsideWeather = prompt (`Enter the outside weather.`);
if (outsideWeather === "sunny"){
  alert(`Wear T-shirt`);
}else if (outsideWeather === "rainy"){
  alert(`Don't forget to take your raincoat`)
}else if( outsideWeather==="hot"){
  alert(`Get  a hanky`);
} else if ( outsideWeather==="freezing"){
  alert(`Get your sweater on.`);
}

