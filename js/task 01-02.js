'use strict'

//task1
console.log("> Task1:");
let admin
let user_name;

user_name = 'John';
admin = user_name;
console.log(admin);

let login = "Admin";
let password = "TheMaster";

console.log("Who's there?");

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

//task2
console.log("> Task2:");

let login2 = "Admin";
let password2 = "TheMaster";

console.log("Who's there?");

switch (login2) {
	case "Admin": {
		switch (password2) {
			case "TheMaster": {
				 console.log("Welcome!");
				 break;
			}
			case "Cancel": {
				 console.log("Canceled.");
				 break;
			}
			default: {
				 console.log("Wrong password");
			}			
		}
		break;
	}
	case "Cancel": {
		console.log("Canceled.");
		break;
	}
	default: {
		console.log("I don't know you");
	}
}
