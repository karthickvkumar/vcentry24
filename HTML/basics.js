// Number -> Any numerical value from Positive, Negative, Fractional, Decimal

// To create variable (Temp storage)
// syntax 
// var variable_name = value;

// variable_name -> Any valid text, it should contains a-z, A-Z, 0-9, _, $

var user_age = 28;
console.log(user_age);

// String -> Any text value which is typed inside '' or ""

var user_emailid = "karthick@gmail.com";
console.log(user_emailid);

// Boolean -> Either true or false
var result = true;
console.log(result);

var future_value;
console.log(future_value);

user_emailid = "kumar@yahoo.in";
console.log(user_emailid);

var student_first_name = "karthick";
var student_last_name = "kumar";
var student_age = 28;
var student_roll_number = 45785456;
var student_standard = "XII";

// Object -> It is a collection of Key and Values or collection of properties
// Creating an Object
// synatx 

// var variable_name = {
//   key1 : value,
//   key2 : value,
//   key3 : value
// };

// key -> Similar to variable_name -> it should contains a-z, A-Z, 0-9, _, $
// value -> Number, String, Boolean, Object, Array, Function

var student_information = {
  first_name : "karthick",
  last_name : "kumar",
  age : 28,
  roll_number : 457855,
  standard : "XII"
};

console.log(student_information);

// Object -> 4 operation => read value, insert new value, edit exisiting value, delete existing value

// To Read a Value -> object_variable_name.key;
console.log(student_information.first_name, student_information.last_name);

// To Insert a new Value -> object_variable_name.newKey = value;

student_information.blood_group = "A+ve";
student_information.fathers_name = "Velraj";

// To Edit/Updated an exisiting value -> object_variable_name.existing_key = new_value;

student_information.age = 18;

// To delete a existing Record -> delete object_variable_name.key

delete student_information.first_name;

console.log(student_information);

// Array -> It is a collection of List data, It should contain similar data type.

// Syntax of creating an Array

// var variable_name = [value1, value2, value3,..., valueN];

// value -> Number, String, Boolean, Object, Array, Function

var listOfMarks = [70, 87, 57, 65, 48];
console.log(listOfMarks);

var listOfNames = ["mr.abc", "mr.csf", "mr.wed", "mr.pods"];
console.log(listOfNames);

var listOfStudent_Information = [
  {
    first_name : "karthick",
    last_name : "kumar",
    age : 28,
    roll_number : 457855,
    standard : "XII"
  },
  {
    first_name : "Yuvaraj",
    last_name : "A",
    age : 29,
    roll_number : 478542,
    standard : "XII"
  },
  {
    first_name : "Aswin",
    last_name : "Kumar",
    age : 25,
    roll_number : 332454,
    standard : "X"
  }
];


// Operation in Array -> 4 Operation => Insert a new value, Read the Value, Edit the exiting value, Delete the value

// Insert a new value into Array

// push() -> Insert a new value at the end of array record
// array_variable_name.push(value_1, value_2, ... , value_n);

listOfStudent_Information.push({
    first_name : "Mr.ABC",
    last_name : "XYZ",
    age : 24,
    roll_number : 002454,
    standard : "YX"
});

// unshift() -> Insert a new value at the start of array record
// array_variable_name.unshift(value_1, value_2, ... , value_n);

listOfStudent_Information.unshift({
  first_name : "Mr.Zyan",
  last_name : "Malik",
  age : 24,
  roll_number : 002454,
  standard : "YX"
});

// To Read value from Array
// array_variable_name[index]
console.log(listOfStudent_Information[4])

// To edit/update a existing value from Array
// array_variable_name[index] = value;

listOfStudent_Information[3] = {
  first_name : "XXXX",
  last_name : "XXX",
  age : 00,
  roll_number : 00000,
  standard : "XX"
};

listOfStudent_Information[1].first_name = "Aswin";

// To delete an value 
// splice() -> Remove a value from specific index of the Array

// array_variable_name.splice(index, deleteCount);

listOfStudent_Information.splice(3, 1);

console.log(listOfStudent_Information);

// Function -> Block of Code 

// Syntax for Creating a Function (Function Definition)

// function function_name(){
//   coding
// }

// function_name -> It should be a Proper text value -> a-z, A-Z, 0-9, $, _

// Syntax for Executing/Running a Function (Function Invocation)

// function_name();

function printWelcomeMessage(){
  var message = "Hello Everyone! Merry Christmas";
  alert(message);
};

// Operators
// 1. Arithmetic Operator  +, -, *, /, %, ++, --
// 2. Assignment Operator =
// 3. Comparision Operator <, <=, >, >=, ==, ===, !=, !== 
// 4. Logical Operator &&, ||, !

// && - AND
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// || - OR
// true || true -> true
// false || true -> true
// true || false -> true
// false || false -> false

// ! - NOT
// ! true -> false
// ! false -> true

// Syntax - if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

/*
Problem: Find whether a person can Vote ?
Solution:
1. We need to provide age(Number - Data type) as input for a program 
2. If the given age is greater than or equal to 18 -> Output - The Person is eligible for Vote
3. If the given age is less then 18 -> Output - The Person is NOT eligible for vote
*/

function check_voting_status(){
  var age = prompt("Enter a person age in number");
  if(age >= 18){
    alert("The Person is eligible for Vote");
  }
  else{
    alert("The Person is NOT eligible for vote");
  }
}

//Syntax - Multipe if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else if(condition){
   // code block will execute if the condition is Truthy
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

/*
Problem: Find the person age category?
Rule for Age category:
1. Age less then 18 -> The person is Minor category
2. Age greater then or equal to 18 and less than 60 -> The person is Major category
3. Age greater then or equal to 60 -> The person is Super Citizen category

Solution:
1. To give person age as input -> Number
2. To idenfity -> less then 18 -> The person is Minor category
3. To idenfity -> greater then or equal to 18 and less than 60 -> The person is Major category
4. To idenfity -> greater then or equal to 60 -> The person is Super Citizen category
*/

function check_age_category(){
  var age = prompt("Enter a person age in number");
  if(age < 18){
    alert("The person is Minor category");
  }
  else if(age >= 18 && age < 60){
    alert("The person is Major category");
  }
  else{
    alert("The person is Super Citizen category");
  }
}