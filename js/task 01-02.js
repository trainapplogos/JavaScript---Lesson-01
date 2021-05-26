'use strict'

//task1
console.log("> Task1:");
let admin
let user_name;

user_name = 'John';
admin = user_name;
console.log(admin);

//task2
console.log("> Task2:");

let login = "Admin";
let password = "TheMaster";

if (login == "Admin") {
    if (password == "TheMaster") {
        console.log("Welcome!");
    } else if (password != "Admin") {
        console.log("Wrong password");
    } else if (password == "Cancel") {
        console.log("Canceled.");
    }
} else if (login == "Cancel") {
    console.log("Canceled.");
} else if (login != "Admin") {
    console.log("I don't know you");
} 