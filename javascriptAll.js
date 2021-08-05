//javascript all you need to know//
//practice in javascript//

console.log('minhaj ' + 'ahmed' + ' age is ' + 24)

var name = 'minhaj';
var age = 24;

console.log(name, age);


// datatypes
// premitive datatypes //
Number
String
Boolean
null
undefined
Infinity //1/0
NaN //'abc' * 10


// object datatypes //
Array
Object
Function


//Primitive DataTypes Reference//
//**Number**//
var n = 1431
var f = 3.24
var nn = Number('34.23')
// console.log(nn)

console.log(Number.parseInt(nn))

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_SAFE_INTEGER)


//**String**//
// first 3 which is direct value is set it's called string literal

var str = 'String';
var str1 = "String"
var str2 = `String`


var str3 = String('amaar')
var str4 = String(232)
var str5 = String(3.23)


//**Boolean**//

var b = true;
var b1 = false;

var b2 = Boolean(true)
var b3 = Boolean(false)



//**Null vs Undefiend**//

var abc; // undefiend-> a variable without value always store undefiend
var xyz = null; // Null-> a variable with unknown value can store Null

console.log(abc, xyz)



//**Type Conversion**//

var strr = '100'
var num = 10;

console.log(Number(strr))
console.log(Number.parseInt(strr))
console.log(num.toString())

console.log(Number(Infinity))// false
console.log(String(Infinity))// true
console.log(Boolean(Infinity));// true
console.log(Boolean(-Infinity));// true
var x = true;// string
console.log(x.toString());


//**Falsy Values**//
false
''
0
null
undefined
NaN
console.log(Boolean(false), Boolean(''));

//**Hexadecimal && Octal Number**//

var hex = 0Xff; //255

var oct = 0323; //211

console.log(hex, oct);


// Operators //
//** Arithmetic Operators*//

// var c = 10;
// var d = 20;

// console.log(c % d);

// //** Incremental **//
// //Pre-Incremental -> // Post-Incremental

// console.log(++c); // first increment && last time do .log
// console.log(d++); // first .log && last time increment


//** Assignment Operators */
var c = 10;

var d = 20;

c += d;
console.log(c);

c -= d;
console.log(c);

c *= d;
console.log(c);

c /= d;
console.log(c);

c %= d;
console.log(c);


// Comparison Operators
var a = 10;
var b = 20;

console.log( a == b); false

console.log( a != b); true



//Statements
// all of line code are statements
console.log('hello world');

var str = 'String'

var num = 10 + (30 / 5) * 5

var a = 10
var b = 20

var c = a >= b


// JavaScript Math
// console.log(Math.E);
// console.log(Math.PI);

const n = 4.823
console.log(Math.abs(n));
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.round(n));
