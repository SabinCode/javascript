// A variable is a container for strong Data
// A variable behaves as if it was the value that it containes

// two steps
// 1. Declaration(var, let, const)
// 2. Assignment (= assignment operator)


// console.log("helooo");
// window.alert("I really like Js");

let age;
age= 15; //number
let firstName = "sabin" //string
let student = true; //booleans

console.log("your are", age ,"years old");
console.log("helllo", firstName)
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML ="you are now  " + age + " years old";
document.getElementById("p3").innerHTML ="Enrollled:  " + student;

// arithmetic exxpression is combination Of...
// operands (values, variables, etc.)
// operators ( + - * / %)
// that  can be evaluated  to a values
// export. y = x+ 5;

let students = 20
// students = students + 1;
// students = students - 1;
// students = students * 1;
// students = students / 1;

let extraStudents = students % 2; //modules to check even or odd
console.log(extraStudents);

//how to accept user input
//easy way with a window prompt

// let username =  window.prompt("whats your name?")
// console.log(username);

//difficulty way with HTML textbox
let username;

document.getElementById("myButton").onclick = function(){

    username  = document.getElementById("myText").value;
    console.log(username)
    document.getElementById("myLabel").innerHTML = "hello " + username;
}


// Type conversion = change the datatype of a value to another (strings, numbers, booleans)
// let favioriteNum = window.prompt("what is your fav num?");

// console.log(typeof favioriteNum)
// favioriteNum = Number(favioriteNum);
// favioriteNum+= 1;

// console.log("hy Now your fav num is ", favioriteNum,)


let x;
let y;
let z;
let k;

x = Number("3.14");
y = String(3.14);
z = Boolean("");
k = Boolean("pizza")

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(k, typeof k);

//const = a variable tha can't changed
//with let we can change the value
// let pi = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius)

// pi = 420.69

// circumference = 2 * pi * radius;
// console.log("the circumference is:", circumference)

// const PI  = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius)

// PI = 420.69

// circumference = 2 * PI * radius;
// console.log("the circumference is:", circumference) //typeerror assignment to const variable

//Math

// let X = -3.14;
// let Y = 5;
// let Z = 9;
// let maximum;
// let minimum;
// let s;
// X = Math.round(X) // 3 it rounds to 3
// X = Math.floor(X) //floor math to small value if x is 3.99 , floor makes it 3
// X = Math.ceil(X) // ceil math to higher num if x is 3.14 , ceil makes it 4
// X = Math.pow(X, 2) //9.8596
// X = Math.sqrt(X) // 1.77
// X = Math.abs(X) // distant away from zero,  if x is -3.14, abs makes positive 3.14
// console.log(X) 
// s = Math.PI; 
// console.log(s) // 3.1415926

// maximum = Math.max(X, Y, Z);
// minimum = Math.min(X, Y, Z);

// console.log(maximum)
// console.log(minimum)

//Right angle triangle
let  a;
let b;
let c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// c = Math.pow(a, 2) + Math.pow(b, 2);
// c = Math.sqrt(c); shortcut below

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log("Side c:", c);

document.getElementById("submitButton").onclick = function() {
    a =document.getElementById("aTextBox").value;
    a= Number(a);

    b =document.getElementById("bTextBox").value;
    b= Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("clabel").innerHTML = "Side C: " + c;

}

//count
let count = 0;
document.getElementById("decreaseBtn").onclick = function() {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function() {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function() {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}


let S;
let A;
let B;

document.getElementById("rollBtn").onclick = function() {
    S = Math.floor(Math.random() * 6) + 1;
    A = Math.floor(Math.random() * 6) + 1;
    B = Math.floor(Math.random() * 6) + 1;

    document.getElementById("Slabel").innerHTML = S;
    document.getElementById("Alabel").innerHTML = A;
    document.getElementById("Blabel").innerHTML = B;
}

//useful STRING properties and methods

let userName = "Sabin i Code";
let phoneNumber = "123-456-7890";
console.log(userName.length) // 10
console.log(userName.charAt(0)); // s
console.log(userName.indexOf("i")) //3
console.log(userName.lastIndexOf("i")) //6

userName = userName.trim() //this removes and display Sabin i Code
userName = userName.toUpperCase() // all upercase
userName = userName.toLowerCase() // all lowercase

phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber) // 123/456/7890
console.log(userName)

//slice() extracts a section of a string and returns it as a new string,
//without modifying the original string

let fullName = "Sabin Code";
let firstNam;
let lastNam;

// firstNam = fullName.slice(0, 5) //Sabin
// lastNam = fullName.slice(5); //Code

firstNam = fullName.slice(0, fullName.indexOf(" ")); // Sabin , starts from 0 and stop at " "
lastNam = fullName.slice(fullName.indexOf(" ") + 1); //Code , starts from " " and add remaining

console.log(firstNam)
console.log(lastNam)


//method chaining = calling one method after another in one contninues line of code
let user = "sabin";

// let letter = user.charAt(4);
// letter = letter.toUpperCase();

//shortcut
let letter = user.charAt(4).toUpperCase(); //calling one method after another

console.log(letter) //N


//if statement = a basic form of decision making 
// if a condition is true, the do somthing
// if not , then don't do it!

let umer = 21;

if (umer >= 18) {
    console.log("you r an adult");
}
else if (umer < 0) {
    console.log("you have not born yet!")
}
else if (umer >= 65){
    console.log("you r a senior citizen!")
}
 else {
    console.log("you r a child");
}

let online = false;
if(online){
    console.log("you r online!") 
} else {
    console.log("you r offline!")
}

//checked properties

document.getElementById("BTN").onclick = function() {

    const myCheckBox = document.getElementById("myCheckBox")
    const visaBTn = document.getElementById("visaBtn")
    const mastercardBtn = document.getElementById("mastercardBtn")
    const paypalBtn = document.getElementById("paypalBtn")



    if(myCheckBox.checked == true){
        console.log("you are subscribed!");
    }else{
        console.log("you are not subscribetd!")
    }

    if(visaBTn.checked){
        console.log("you r paying with a Visa!");
    }else if(mastercardBtn.checked){
        console.log("you r paying with a mastercard!")
    }else if(paypalBtn.checked){
        console.log("you r paying with paypal")
    }else{
        console.log("you must select a payment type!")
    }
}

//switch = statement that examines a value for a match against many case clauses.
// more efficient than many "else if" statements 

let grade = "A";

switch(grade){
    case "A":
        console.log("you did great!");
        break;
    case "B":
        console.log("you did good!");
        break;
    case "C":
        console.log("you did okay!");
        break;
    case "D":
        console.log("you passed ... barely!");
        break;
    case "F":
        console.log("you failed !");
        break;
    default:
        console.log(grade, "is not a letter grade!");
}

let grades = 90;

switch(true){
    case grades >= 90:
        console.log("you did great!");
        break;
    case grades >= 80:
        console.log("you did good!");
        break;
    case grades >= 70:
        console.log("you did okay!");
        break;
    case grades >= 60:
        console.log("you passed ... barely!");
        break;
    case grades < 60:
        console.log("you failed !");
        break;
    default:
        console.log(grade, "is not a letter grade!");
}


// Gives us the ability to check more than 1 condition concurrently
//&& AND (Both conditon must be true)
// || OR(Either conditon can be true)

let temp = 15; //check with -15 and 50

if(temp > 0 && temp < 30){
    console.log("The weather is good!")
}else {
    console.log("the weather is bad!")
}

let tempr = 15; //check with -15 and 50

if(tempr <= 0 || tempr >= 30){
    console.log("The weather is bad!")
}else {
    console.log("the weather is good!")
}

let tempt = 15; //check with -15 and 50
let sunny = false;

if(tempt > 0 && tempt < 30 && sunny){
    console.log("The weather is good!")
}else {
    console.log("the weather is bad!")
}

// ! NOt logical operator
// typically used to reveerse a condition's boolean value
//true -> false        false -> true










