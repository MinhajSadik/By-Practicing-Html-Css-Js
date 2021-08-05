// //javascript all you need to know//
// //practice in javascript//

// console.log('minhaj ' + 'ahmed' + ' age is ' + 24)

// var name = 'minhaj';
// var age = 24;

// console.log(name, age);


// // datatypes
// // premitive datatypes //
// Number
// String
// Boolean
// null
// undefined
// Infinity //1/0
// NaN //'abc' * 10


// // object datatypes //
// Array
// Object
// Function


// //Primitive DataTypes Reference//
// //**Number**//
// var n = 1431
// var f = 3.24
// var nn = Number('34.23')
// // console.log(nn)

// console.log(Number.parseInt(nn))

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_SAFE_INTEGER)


// //**String**//
// // first 3 which is direct value is set it's called string literal

// var str = 'String';
// var str1 = "String"
// var str2 = `String`


// var str3 = String('amaar')
// var str4 = String(232)
// var str5 = String(3.23)


// //**Boolean**//

// var b = true;
// var b1 = false;

// var b2 = Boolean(true)
// var b3 = Boolean(false)



// //**Null vs Undefiend**//

// var abc; // undefiend-> a variable without value always store undefiend
// var xyz = null; // Null-> a variable with unknown value can store Null

// console.log(abc, xyz)



// //**Type Conversion**//

// var strr = '100'
// var num = 10;

// console.log(Number(strr))
// console.log(Number.parseInt(strr))
// console.log(num.toString())

// console.log(Number(Infinity))// false
// console.log(String(Infinity))// true
// console.log(Boolean(Infinity));// true
// console.log(Boolean(-Infinity));// true
// var x = true;// string
// console.log(x.toString());


// //**Falsy Values**//
// false
// ''
// 0
// null
// undefined
// NaN
// console.log(Boolean(false), Boolean(''));

// //**Hexadecimal && Octal Number**//

// var hex = 0Xff; //255

// var oct = 0323; //211

// console.log(hex, oct);


// // Operators //
// //** Arithmetic Operators*//

// // var c = 10;
// // var d = 20;

// // console.log(c % d);

// // //** Incremental **//
// // //Pre-Incremental -> // Post-Incremental

// // console.log(++c); // first increment && last time do .log
// // console.log(d++); // first .log && last time increment


// //** Assignment Operators */
// var c = 10;

// var d = 20;

// c += d;
// console.log(c);

// c -= d;
// console.log(c);

// c *= d;
// console.log(c);

// c /= d;
// console.log(c);

// c %= d;
// console.log(c);


// /*Comparison Operators*/
// var a = 10;
// var b = 20;

// console.log( a == b); false

// console.log( a != b); true



// /*Statements*/
// // all of line code are statements
// console.log('hello world');

// var str = 'String'

// var num = 10 + (30 / 5) * 5

// var a = 10
// var b = 20

// var c = a >= b


// /*JavaScript Math*/
// console.log(Math.E);
// console.log(Math.PI);


// var n2 = 4.389
// console.log(Math.abs(n));
// console.log(Math.floor(n));
// console.log(Math.ceil(n));
// console.log(Math.round(n));

// //Max or min
// console.log(Math.max(300, 302, 100));
// console.log(Math.min(303, 200, 101));

// //Power
// console.log(Math.pow(2, 3));
// console.log(Math.pow(3, 5));
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(64));

// //Genarate random number in under 50
// console.log(Math.round(Math.random() * 50));


// /*date*/

// var date = new Date()
// console.log(date);// 2021-08-05T20:35:14.026Z

// console.log(date.toDateString());// Fri Aug 06 2021

// console.log(date.toDateString());// Fri Aug 06 2021

// console.log(date.toLocaleString());// 06/08/2021, 02:35:14


// console.log(date.getDate());// 6

// console.log(date.getMonth());// 7

// console.log(date.getFullYear());// 2021


// console.log(date.getHours());// 2

// console.log(date.getMinutes());// 35

// console.log(date.getSeconds());// 14

// console.log(date.getMilliseconds());// 491



// /* Conditional Operators */
// // if
// var a = 100
// var b = 200

// if(a > b){
//     console.log('A is greter than B')
// }

// if (a < b) {
//     console.log('B is greter than A');
// }

// var n = 50

// if(n % 2 === 0){
//     console.log('জোড় সংখ্যা');
// }
// if (n % 2 === 1) {
//     console.log('বিজোড় সংখ্যা');
// }

// // else

// var a = 200
// var b = 100

// if(a > b){
//     console.log(`${a} gretter than ${b}`)
// }else if( a < b) {
//     console.log(`${a} smaller than ${b}`);
// }else{
//     console.log(`${a} both are ${b} same`);
// }

// var n = 5

// if(n % 2 === 0 && n !== 1){
//     console.log(`${n} even number, জোড় সংখ্যা`);
// }else {
//     console.log(`${n} odd number, বিজোড় সংখ্যা`);
// }

// /* else if */
// var a = 100
// var b = 200

// if(a > b){
//     console.log('A is greter than B')
// }else {
//     console.log('B is greter than A');
// }

// var n = 0

// if(n === 0){
//     console.log(`${n} is an zero`);
// }else if (n % 2 === 0){
//     console.log(`${n} even number`);
// }else{
//     console.log(`${n} is odd number`)
// }


/* Switch Case */

//trying to if else 

var date = new Date()

var today = date.getDay()
// console.log(today);

// // if '0' return it's sunDay and if '1' return monDay and continue
// if(today === 0){
//     console.log('today is sunDay');
// }else if(today === 1){
//     console.log('today is monDay');
// }else if(today === 2){
//     console.log('today is TuesDay');
// }else if(today === 3){
//     console.log('today is WednesDay');
// }else if(today === 4){
//     console.log('today is ThusDay');
// }else if(today === 5){
//     console.log('today is FriDay');
// }else{
//     console.log('today is SaturDay');
// }


switch(8){
    case 0:
        console.log('today is SunDay');
        break
    case 1:
        console.log('today is MonDay');
        break
    case 2:
        console.log('today is TuesDay');
        break
    case 3:
        console.log('today is WednesDay');
        break
    case 4:
        console.log('today is ThusDay');
        break
    case 5:
        console.log('today is Friday');
        break
    case 6:
        console.log('today is SaturDay');
        break
    default: 
        console.log('Not this Valid');
}