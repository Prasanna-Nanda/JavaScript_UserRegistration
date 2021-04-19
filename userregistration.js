console.log("Welcome to User Registration")


const prompt = require('prompt-sync')();
var getName = prompt('Enter the firstname: ');

var firstnameregex = new RegExp("(^[A-Z]{1})[a-z]{2,}");

 if(firstnameregex.test(getName)) {
    console.log(getName);
} else {
    console.log("Match not found.");
}
