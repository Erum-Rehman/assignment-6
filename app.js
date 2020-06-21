//CHAP:21-25 

//question:1
// var first = prompt("enter first name");
// var last = prompt("enter last name");
// var fullName = first +" "+ last;
// alert(`Hello ${fullName}, \n Nice to meet you`);

//question:2
// var mobile = prompt("enter your favorite mobile phone model");
// var len = mobile.length;
// document.write(`My favorite phone is: ${mobile} <br> Length of string: ${len}`);

//question:3
// var str = "Pakistani";
// var n = str.indexOf("n");
// document.write(`String: ${str} <br> Index of 'n': ${n}`);

//question:4
// var str = "Hello World";
// var n = str.lastIndexOf("l");
// document.write(`String: ${str} <br> Last index of 'l': ${n}`);

//question:5
// var str = "Pakistani";
// var i = str.charAt(3);
// document.write(`String: ${str} <br> Character at index 3: ${i}`);

//question:6
// var first = prompt("enter first name ");
// var last = prompt("enter last name");
// var con = first.concat(last);
// alert(`Hello ${con}, \n Nice to meet you`);

//question:7
// var city = "Hyderabad";
// var rep = city.replace("Hyder" ,"Islam");
// document.write(`City: ${city} <br> After replacement: ${rep}`);

//question:8
// var message = "Ali and Sami are best friends. They play cricket and football together."; 
// var rep = message.replace("and", "&");
// document.write(`${rep}`);

//question:9
// var integerString = "24";
// var num = Number(integerString);
// document.write(`Value: ${integerString} <br> Type: ${typeof integerString} <br> Value: ${num} <br> Type: ${typeof num}`)

//question:10
// var user = prompt("enter string");
// var upper = user.toUpperCase();
// document.write(`User input: ${user} <br> Upper case: ${upper}`);

//question:11
// var sen = prompt("enter string");
// sen = sen.toString();
// var txt = sen.charAt(0).toUpperCase()+sen.substr(1).toLowerCase();
// document.write(`User input: ${sen}<br> Title case: ${txt}`)

//question:12
//var num = 35.36 ; 
//document.write("Number: ${num} <br> Result: " + num.replace(".","")+"<br>");

//question:13
// var user = prompt("enter username");
// var regex = /^[A-Za-z0-9]+$/
// var valid = regex.test(user);
// if (valid) {
//     alert("valid username")
// }else{
//     alert("Please enter valid username");
// }

//question:14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am? ");
// search = search.toLowerCase();
// var bakery = A.indexOf(search)
//    if( A.indexOf(search)!== -1){
//        alert(`${search} is available at index ${A.indexOf(search)} in our bakery`)
//    }else{
//      alert(`We are sorry. ${search} is not available in our bakery`)
//    }

//question:15
// var name = prompt("enter password");
// var passArr = name.split('');
// if((passArr[0]>='A' && passArr[0]<='Z') || (passArr[0]>='a' && passArr[0]<='z' && passArr.length<=6)){
//     alert("Correct...!")
// }
// else{
//     alert("Please enter a valid password")
// }

//question:16
// var university = "University of Karachi";
// var res = university.split('');
// for(var i = 0;i<res.length;i ++){
//     document.write(res[i],"<br>")
// }

//question:17
// var myString = prompt("enter string");
// var lastChar = myString[myString.length -1];
// document.write(`User input: ${myString} <br> last character of input: ${lastChar}`);

//question:18
// var text = ["The" , "quick" , "brown", "fox" ,"jumps", "over" ,"the" ,"lazy", "dog"];
// var count = 1;
//     for(var i = 0; i < text.length; i++){
//         if(text[i] === "the"){
//             count++;
//         }
//     }
// document.write(`Text:The quick brown fox jumps over the lazy dog<br>There are ${count} occurence(s) of word 'the'`) 

 //CHAP:26-30
 
 //question:1
//  var number = prompt("enter positive number");
//  var round  = Math.round(number);
//  var floor = Math.floor(number);
//  var ceil = Math.ceil(number);
//  document.write(`number: ${number} <br> round off value: ${round} <br>floor value: ${floor} <br>ceil value: ${ceil}`);

//question:2
// var number = prompt("enter negative number");
// var round  = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write(`number: ${number} <br> round off value: ${round} <br>floor value: ${floor} <br>ceil value: ${ceil}`);

//question:3
// var num = prompt("enter numer");
// var abso = Math.abs(num)
// document.write(`The absolute value of ${num} is ${abso}`);

//question:4
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write(`random dice value:  ${diceRoll}`);

//question:5
// var toss = Math.random() * 3;
// var floor = Math.floor(toss);
// if(floor == 1){
//     document.write(floor);
//     document.write(`<br>random coin value: Tails`)
// }
// if(floor == 2){
//     document.write(floor);
//     document.write(`<br>random coin value: Heads`) 
// }

//question:6
// var math = Math.floor(Math.random() * 100);
// document.write(math);

//question:7
// var ask = prompt("enter your weight in kilograms");
// var num = parseInt(ask);
// document.write(`The weight of user is: ${num} kilograms`);

//question:8
// var num = 5;
// var secret = prompt("Enter a number between 1 and 10");
// if (secret == num) {
//     alert(`congratulations!You inter a correct number`)
// }else{
//     alert(`Try again`)
// }

//CHAP:31-34

//question:1
// var d = new Date();
// document.write(d);

//question:2
// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
// document.write(`Current month: ${n}`);

//question:3
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var d = new Date();
// var dayName = days[d.getDay()];
// var dayName = d.toString().split(' ')[0];
// document.write(`Today is ${dayName}`)

//question:4
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var d = new Date();
// var dayName = days[d.getDay()];
// if(dayName == "sunday" || dayName =="saturday"){
//     alert(`It's Fun day`);
// }else{
//     alert(dayName)
// }

//question:5
// var d = new Date();
// var e = d.getDate();
// if (e == 15 || e<16) {
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }

//question:6
//  var d = new Date("Jan 01 1970");
//  var rightNow = new Date(); 
//  var theDay = rightNow.getTime();
//  var mins = theDay/1000/60;
//  document.write(`Current date ${rightNow}<br>Ellapsed miliseconds since ${d}: ${theDay}
//  <br>Ellapsed minutes since ${d}: ${mins}`)

//question:7
// var dt = new Date();
// var h =  dt.getHours(), m = dt.getMinutes();
// var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');

// if (_time == "PM") {
//     alert(`It's PM`)
// }else{
//     alert(`It's AM`)
// }

//question:8
// var d = new Date("Dec 31 2020");
// document.write(`Later date: ${d}`)

//question:9
// var previous = new Date("April 25 2020");
// var now = new Date();
// var timePass = Math.ceil((now - previous) / 86400000);
// document.write(`${timePass} days have passed since 1st Ramadan, 2020`)

//question:10
// var now = new Date();
// var today = new Date("Jan 01 2020");
// var diff = now - today; // ms difference
// var timePass = Math.round(diff/1000)
// document.write(`On reference date ${now} <br> ${timePass} had passed since beginning of 2020`)

//question:11
// var d = new Date();
// var hour = new Date();
// hour.setHours(24);
// document.write(`Current date: ${d}  <br> 1 hour ago it was ${hour}`)

//question:12
// var date = new Date();
// var d = new Date("1920-6-16");
// document.write(`Current date: ${date} <br> 100 years back,it was ${d}`)
 
//question:13
// var age = prompt("enter age");
// var birthYear = 2020 - age;
// document.write(`Your age is: ${age} <br> Your birth year is: ${birthYear}`)

//question:14
// var customer = prompt("Enter customer name");
// var month = prompt("Enter current month of bill");
// var num = prompt("Enter number of units");
// var charges = prompt("Enter charges per unit");
// var late = 350;
// var net =  num * charges;
// var gross =  net + late;
// document.write(`<h1>K-Electric Bill</h1> <br>Customer name: <b>${customer}</b> <br> Month: <b>${month}</b> <br>
//  Number of units: <b>${num}</b> <br> Charges per unit: <b>${charges}</b> <br> <br> Net Amoount Payable (within due date): <b>${net}</b> 
// <br> Late payment surcharge: <b>${late}</b> <br>Gross Amount Payable (after due date): <b>${gross}</b>`)

//CHAP:35-38

//question:1
//  var now = new Date();
//  document.write(now)

//question:2
// function greetUser() { 
//     var first = prompt("enter first name");
//     var last = prompt("enter last name");
//     var fullName = first +" "+ last;
//        alert(`hello ${fullName} \n Nice to meet you` ); 
//      }
//      greetUser();
 

//question:3
// function addnum(){
// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var add = num1 + num2;
//   alert(`The addition of ${num1} & ${num2} is ${add}`)
//   }
//   addnum();

//question:4
// function calculator(num1,oper,num2){
//     if(oper == "+"){
//         return num1 + num2
//     }
//     else if(oper == "-"){
//     return num1 - num2
//     }
//     else if(oper == "*"){
//     return num1 * num2
//     }
//     else if(oper == "/"){
//     return num1 / num2
//     }else{
//     alert("incorrect operator")
//     }
// }
// var result = calculator(5,"*",8);
// document.write(result)

//question:5
// function square(num) {
//    var squ = num * num ;
//    alert(`The square of num is: ${squ}`)
// }
// var res = square(6);
// document.write(res);

//question:6
// function factorial(n){
//     var answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   var answer1 = factorial(6)
//   alert("The factorial" + " is " + answer1);

//question:7
// function counting(){
// var start = +prompt("enter start number");
// var end = +prompt("enter end number");
// for(var i = start; i<=end;i++){
//     document.write(`${i}<br>`)
//     }
// }
// counting();

//question:8
// function hypotenous() {
//     var base = +prompt("enter value of base");
//     var per = +prompt("enter value of perpendicular");
//     var x = Math.sqrt(base*base + per*per);
//     document.write(x)
//         function square() {
//             var y = x * x;
//             document.write(y);
//         return square;
//     }
// }
// var z = hypotenous();

//question:9
// function area(length, width) {
//     var length = prompt("Enter  length of your rectangle.");
//     var width = prompt("Enter  width of your rectangle.");
//     var x = length * width;
        
//     document.write(`The area of your rectangle is  ${x}`);  
// }
//     area(); 

//question:10
// function check_Palindrome(str_entry){
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//             if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
    
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//             for (var x = 0; x < ccount; x++) {
    
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 alert("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         alert("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome('madam');
//     check_Palindrome('nurses');
//     check_Palindrome('fox');

//question:11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

//question:12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// alert(find_longest_word('Web Development Tutorial'));
// alert(find_longest_word('online computer classes'));

//question:13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(char_count('JSResourceS.com', 'o' ));
// alert(char_count('Google.com','o'));

//quuestion:14
// function  calcCircumference(radius) {
//     var cir = 2 * 3.142 * radius;
//     return document.write(`The circumference is ${cir}`)
// }
// calcCircumference(prompt("enter radius for circumference"));

// function calcArea(radius) {
//     var area = 3.142 * (radius * radius);
//     return document.write(`<br>The area is ${area}`)
// }
// calcArea(prompt("enter value of radius"));