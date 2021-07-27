// ByPractic HTML, CSS, JAVASCRIPT



// // check function scope

function greeting(hello){
    var name = 'minhajsadik'
    console.log(name);
}
console.log(name);
greeting();

// global scope

if(true){
    var name = 'minhajsadik';
    // console.log(name);
}
console.log(name);


/* 
// Operators
1. Assignment Operators
2. Comparison Operators
3. Arithmetic Operators
4. Logical Operators
5. Conditional Operators (ternary)
6. Relational Operators
7. Comma Operators
8. Bitwise Operators
9. String Operators
10. Unary Operators
*/


// Assignment operator
let x = 10;
let y;
y = x;
console.log(y);//10

let a = 20;
let b = 30;
a = b;
console.log(a);//30


// Compound Operators

let x = 10;
let y = 20;

x += y; //x = x + y;
x -= y; //x = x - y;
x *= y; //x = x * y;
x /= y; //x = x / y;
console.log(x)

// Arithmetic Operators
/*
+
-
*
/ 
++
--
*/

let x = 10;
x++;
x--;

console.log(x ** 2)


// Logical Operators -- returns Boolean
// 1. Logical && twice side ture retern true or one side false return false 
// 2. Logical ||

let happy = true && true;









/*
// coercion data convert system name 
// Comparison Operators
1 Equal (==)
2 Not equal (!=)
3 Strict equal(===)
4 Strict not equal (!==)
5 Greater than (>)
6 Greater than or equal (>=)
7 Less than (<)
8 Less than or equal (<=)
*/

console.log(4 == 4);
console.log(4 === 4);
console.log(4 != '4');
console.log(100 <= 100)






let text = "";
const fruits = ["Minhaj", "Ahmed", "Sadik"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = text;


function myFunction(item, index) {
  text += index + " : " + item + "<br>";
}


console.log(6 > 5)



function square(number){
    return number * number;
}

const result = square(7);
console.log(result)

function myFunc(theObject) {
    theObject.make = 'Toyota';
  }
  
  var mycar = {make: 'Honda', model: 'Accord', year: 1998};
  var x, y;
  
  x = mycar.make; // x gets the value "Honda"
  
  myFunc(mycar);
  y = mycar.make; // y gets the value "Toyota"
// (the make property was changed by the function)



console.log(true > 1)