console.log("Welcome to User Registration")


const prompt = require('prompt-sync')();
var getName = prompt('Enter the firstname: ');

var firstnameregex = new RegExp("(^[A-Z]{1})[a-z]{2,}");

 if(firstnameregex.test(getName)) {
    console.log(getName);
} else {
    console.log("Match not found.");
}


var getName1 = prompt('Enter the lastname: ');

var firstnameregex1 = new RegExp("([A-Z]{1}[a-z]{2,}\s{0,}[A-Z]{1}[a-z]{2,})");

 if(firstnameregex1.test(getName1)) {
    console.log(getName1);
} else {
    console.log("Match not found.");
}

