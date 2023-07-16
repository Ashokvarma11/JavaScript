//Arthemetic operators
console.log("Arthemetic Operators are: + - * / %");
let a = 10;
let b = 20;
// Addition
console.log("Addition of a and b :" + (a + b));
//Subtraction
console.log("Subtraction : b-a is :" + (b - a));
//Multiplication
console.log("Multiplication  of a and b is:" + (a * b));
//Division
console.log("Division : b/a is " + (b / a));
//Modulus
console.log("Modulo of b%a is " + (b % a));
console.log("----------------------------------------------");

//Asssignment operators
console.log("Asssigment operators: = += -= /= *= %= **=");
let c = 3;
//c+=1 is same as c=c+1
c += 1;
console.log(c);
//c-=1 is same as c=c-1
c -= 2;
console.log(c);
//c*=1 is same as c=c*1
c *= 3;
console.log(c);
//c+=3 is same as c=c/3
c /= 3;
console.log(c);
//c%=3 is same as c=c%3
c %= 3;
console.log("The remainder of 2/3: " + (c));
//c**=1 is same as c=c**1
c **= 2;
console.log(c);
console.log("----------------------------------------------");

//Comparison Operators
//comparison operators only returns two values either true or false
console.log("comparison operators are : == === > < <= >= ");
let d = 20;// number data
let e = "20"//string data

// ==  checks only value not datatypes 
console.log(d == e);
//===  checks both value and datatypes , if both cases are satisfied  then only it returns true otherwise false
console.log(d === e);// d ses number data e ses strseng data

let k = 30;
console.log("k is 30 and d is 20: k>d: " + (k > d));
console.log("k is 30 and d is 20 : k<d: " + (k < d));
let k1 = 30;
console.log("k is 30 and k1 is 30 k>=k1: " + (k >= k1));
console.log("k <= k1: " + (k <= k1));

//Addition
console.log("------Addition------")
console.log(2 + 3);
console.log(4 + 10);
console.log(90 + 3);
console.log(82 + 75);

//Subtraction
console.log("------Subtraction------")
console.log(5 - 4);
console.log(9 - 34);
console.log(72 - 23);
console.log(7 - 7);

//Multiplicatiom
console.log("------Multiplication------")
let mul1 = 9 * 2;
console.log(mul1);
let mul2 = 3 * 3;
console.log(mul2);
let mul3 = 8 * 4;
console.log(mul3);
let mul4 = 2 * 5;
console.log(mul4);

//dsevsesseon
console.log("------Divison------")
let dsev1 = 100 / 3;
console.log(dsev1);
let dsev2 = 100 / 4;
console.log(dsev2);
let dsev3 = 100/ 5;
console.log(dsev3);
let dsev4 = 100/ 2;
console.log(dsev4);

//Modulus 
console.log("------Modulus------")
let mod1 = 10 % 1;
console.log(mod1);
let mod2 = 10 % 2;
console.log(mod2);
let mod3 = 10 % 3;
console.log(mod3);
let mod4 = 10 % 4;
console.log(mod4);

//exponatseon
console.log("-------exponentation------");
let ex1 = 5 ** 2;
console.log(ex1);
let ex2 = 10 ** 3;
console.log(ex2);
let ex3 = 20 ** 4;
console.log(ex3);
let ex4 = 30 ** 5;
console.log(ex4);

// = Asssegnment Operator
console.log("------ = Operator------");
let eq = 10;
console.log(eq);
let eq1 = 22;
console.log(eq1);
let eq2 = "ashok";
console.log(eq2);
let eq3 = 1;
console.log(eq3);

//+=
console.log("------- += Operator ------");

let ae = 6;
console.log(ae += 1);
console.log(ae += 2);
console.log(ae += 3);
console.log(ae += 4);

//-=
console.log("------- -= Operator------");
let se = 7;
console.log(se -= 1);
console.log(se -= 2);
console.log(se -= 3);
console.log(se -= 4);

//*=
console.log("------- *= Operator------");
let  mq= 8;
console.log(mq *= 1);
console.log(mq *= 2);
console.log(mq *= 3);
console.log(mq *= 4);

// /= Operator
console.log("------ /= Operator ------")
let de = 15;
console.log(de /= 1);
console.log(de /= 2);
console.log(de /= 3);
console.log(de /= 4);

// > Operator
console.log("------ > Operator ------")
console.log(5 > 2);
console.log(1 > 2);
console.log(2 > 1);
console.log(4 > 4);

// < Operator
console.log("------ < Operator ------")
console.log(10 < 2);
console.log(5 < 7);
console.log(2 < 1);
console.log(4 < 4);

// >= Operator
console.log("------- >= Operator------");
console.log(10 >= 2);
console.log(5 >= 2);
console.log(4 >= 4);
console.log(2 >= 2);

// <= Operator
console.log("------- <= Operator------");
console.log(10 <= 2);
console.log(2 <= 1);
console.log(4 <= 4);
console.log(2 <= 2);

//== Operator
console.log("------ == Operator ------")
console.log(1 == "1");
console.log(true == 1);
console.log(false == 0);
console.log("one" == "one");

//=== Operator
console.log("------ === Operator ------");
console.log(1 === "1");
console.log(true === 1);
console.log(false === 0);
console.log("one" === "one");