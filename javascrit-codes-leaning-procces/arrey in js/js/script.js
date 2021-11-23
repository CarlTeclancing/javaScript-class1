/*
var myTimeout =  setTimeout(function() {
    alert("This is my js book");
}, 3000);
*/
var firstName = "john";
var secondName = "Deo";
var age = 30;
document.write(firstName +" " +secondName+"<br>");
document.write(age);

//creating functions in js
//what are functions
//fucntions are aone of the fundamental building bocks of programing.
//a function is a method in js  and it  is a set of statments to perfom a particular task

function writeText(str){
    var str = "water";
    document.getElementById("h1").innerHTML = str;
}
writeText("hello world");

function sum(a, b)
{
    
    return sum = a + b;
}
document.write("<br>"+ sum(1,3));
 function myFunc()
 {
     document.write("<br>"+ age);
 }
 myFunc()
 
 // java objecs
 //must of the time creating variables begins with definition of the variable.
var person = {
     fullName: ["Yuven Carlson", "Dzelamonyuy"],
     age: 19,
     hobbies: ["coddng", "playing chess", "gamming"],
     isMarried: false,
     showName: function(){
         alert(this.fullName);
     },
     showAge: function(){
         alert(this.age);
     }
 }
 document.write("<br>"+person.fullName);
  
 var string =  "her name is 'racheal'";
 document.write("<br>"+string);

 /*function gettingStirng(){
     var usserName = window.prompt("hello to you beautiful may i know your name?");
     var string = "you are welcom"+ usserName+"God bless you";
     alert(string);
     document.getElementById("h1").innerHTML = usserName;
 }
 gettingStirng()*/
 //this part of the codes prints out the index of a particular string in a codes

 console.log(string.length);
var tee = "hello world how are you";
var teeSearch = tee.search("how");
document.write("<br>"+ teeSearch);
//some words and meaning in js
//.slice to cut off
//.push to add
//pop() removes the last element of an array
//shift() pulls the copy of the array into a new arrays
//sort() sorts elements alphabetically
//splice() adds elements in a specified way and position


var cities = ["yaounde", "chaina", "india", "bamenda"];
//this removes the last elemetn "bamenda"
cities.pop();
//this adds hello to the list as an object item
cities.push("hello");
document.write("<br>"+ cities);
//accessing the last item
var lastItem = cities[cities.length - 1];
document.write("<br>"+ lastItem)
//ussing a loop to loop through and print all values in the arrey
for(var i = 0; i < cities.length; i++){
    document.write("<br>" + cities[i]);
}
var type = typeof cities;
document.write("<br>"+ type);

var str = cities.join("*");
document.write("<br>"+ str);
var town = ["kumbo", "simbock", "bastos"]
//concatinates the two arrays together
var todoo = cities + " " +town;
document.write("<br>"+ todoo);//concatianation occcures here
document.write("<br>"+ i);

//sorting in array methods
 var fruits = ["bannanas", "oranges", "apples", "carrots"];
fruits.sort();
document.write("<br>"+ fruits);
//returning arrays in too and a froo means
var numbers = [4, 7, 1, 6, 9, 0, 4];
numbers.sort(function(a, b){
    return a - b;
});
document.write("<br>"+numbers);

numbers.sort(function(a, b){
    return b - a;
});
document.write("<br>"+numbers);
//sorting arreys of objects
var students = [
    {name: "john", age: 7},
    {name: "monica", age: 5},
    {name: "paul", age: 6}
];
students.sort(function(a, b){
    return a.age - b.age;

});
for(var i = 0; i < students.length; i++){
    students.reverse();//this is to reverse the are
    document.write("<br>"+ students[i].name + " "+ students[i].age);
}
var numbersTimesTwo = numbers.map(function(value){
    return value * 2;
});
document.write("<br>"+ numbersTimesTwo);
//using filter() methods
//the example below will filter and create a new array method
var newArr = numbers.filter(function(value){ return value < 4;});
document.write("<br>"+ newArr);


///javacript event
//button event on click
var btn = document.getElementById("btn");
btn.onclick = click;
function click(){
    alert("hello  world");
};
 var btnn = document.getElementById("btnn");
 btnn.addEventListener("click", disp);
function disp(){
    alert("this is the disp button");
};
 
//the text change event
document.getElementById("city");
document.addEventListener("change", function(){
    var val = document.getElementById("city").value;
    document.getElementById("demo").innerHTML = val
});

//the mouse hover event
var hov = document.getElementById("demo");
hov.addEventListener("mouseover", function(){
    hov.innerHTML = "fuck you";
});
//the fucus event
var text = document.getElementById("textArea");
text.addEventListener("focus", function(){
    text.style.background = "red";
    text.style.color = "white";
});
text.addEventListener("blur", function(){
    text.style.background = "white";
    text.style.color = "black";
});
//java script math object

var num1 = Math.ceil(0.90);
var num2 = Math.ceil(7.90);
var num3 = Math.ceil(67.90);
document.write("<br>"+ num1+ " " + num2 +" "+ num3);

// other math opperations are 
/* 
Math.ciel = round up a decimal numbber
Math.floor = rounds down a decimal
Math.round = rounds a decimal to the nearest whole number
Math.squar = finds the square root of a number
Math.cbrt = takes the cube root of a number
Math.abs = finds the absolute value of a number that is returns a positive number
Math.maz = retuns tha maxum of a nuber in an arey of numbers
Max.min = returns the minimum number in an arey of numbers
Math.pow(a, b); takes the a to the power b
*/

//javascript math random

var random = Math.random();
console.log(random);

function getRand(min, max){
    var min = 9;
    var max = 2;
    return Math.floor(Math.random()* (max - min)) + min;
}
console.log(getRand());
j
var btnnn = document.getElementById("btnnn");
btnnn.onclick = clickk;
function clickk(){
    var age1 = prompt("How old are you....");
    if( age1 > 20){
        alert("you are and adult");
    }else{
        alert("either you are a tenager or a kid.");
    }
}

var fruits = document.getElementById("fruit");
if(fruits == "apple"){
    document.getElementById("choice").innerHTML = "yellow";
}else{
    document.getElementById("choice").innerHTML = "nothing sellected";
}

//switch cases in javascript
/*
var citty = prompt("Enter a city of your choice :");
switch(citty){
    case "cameroon":
        document.write("<br>it is faound in Africa");
        break;
    case "Nigeria":
        document.write("<br>it is found in East Africa");
        break;
}

for(var i = 0; i < 5; i++){
    document.write("<p>hello world<p>");
}

var dress = ["mumbai", "Abuja", "new york"];
var html = "";
for(var i = 0; i <= dress.length; i++){
    html += "<p>" +dress[i] + "</p>";
}
document.write(html);
*/

var x = 0;
var myinterval = setInterval(function(){
    x +=1;

    document.getElementById("bt").appendChild(x);
}, 1000);
function stopInterval(){
    clearInterval(myinterval);
}
var bttn = document.getElementById("bttn");
bttn.onclick = stopInterval;
//Event listeners in javascript
var btn1 = document.getElementById("btn-1");
    btn1.addEventListener("focus", function(){
        var bod = document.getElementById("bod");
        bod.style.backgroundColor = "black";
        bod.style.color = "white";
    });

var btn2 = document.getElementById("btn-2");
btn2.addEventListener("focus", function(){
    var bod = document.getElementById("bod");
    bod.style.backgroundColor = "white";
    bod.style.color = "black";
});

var textA = document.getElementsByTagName("input")[0];
textA.addEventListener("change", function(){
    var write = document.getElementById("text-Area").innerHTML = textA.value;
 //this has the prompt elemets types  
});
if(confirm("Do you love this app?")){
    alert("You pressed ok. Thank You!");
}else{
    alert("You pressed cancel. sad!");
}

var inName = prompt("Enter your name: ");
if(inName == ""|| inName == nul){
        alert("Invalid Name!");
}else if(inName !== "" || inName !== nul){
        alert("Hi" + inName + "always remember that you are spercial!");
}

//working with cookies in java script

var x = document.cookie =  "firstName = john; lastName = Deo";
console.log(x);
