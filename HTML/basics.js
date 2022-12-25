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

// Object -> It is a collection of Key and Values
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
console.log(listOfStudent_Information);

