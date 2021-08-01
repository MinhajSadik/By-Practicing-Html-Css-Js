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

const str = 'String';
const str1 = "String"
const str2 = `String`


const str3 = String('amaar')
const str4 = String(232)
const str5 = String(3.23)


//**Boolean**//

const b = true;
const b1 = false;

const b2 = Boolean(true)
const b3 = Boolean(false)



//**Null vs Undefiend**//

var abc; // undefiend-> a variable without value always store undefiend
const xyz = null; // Null-> a variable with unknown value can store Null

console.log(abc, xyz)



//**Type Conversion**//

const strr = '100'
const num = 10;

console.log(Number(strr))
console.log(Number.parseInt(strr))
console.log(num.toString())

console.log(Number(Infinity))// false
console.log(String(Infinity))// true
console.log(Boolean(Infinity));// true
console.log(Boolean(-Infinity));// true
const x = true;// string
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

const hex = 0Xff; //255

const oct = 0323; //211

console.log(hex, oct);