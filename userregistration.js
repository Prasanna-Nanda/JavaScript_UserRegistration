let utility = require ('./Utility_user')
console.log("Welcome to User Registration");
const prompt = require('prompt-sync')();

var firstnameregex = new RegExp("(^[A-Z]{1})[a-z]{2,}");
var lastnameregex = new RegExp("(^[A-Z]{1})[a-z]{2,}");
var MailIdregex = new RegExp("(^[a-z]{3,}.)|([a-z]{3,})@([a-z]{2,}.[a-z]{2})|(.[a-z]{2})");
var Mobilenumberregex = new RegExp("^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$");
var Passwordregex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");








function inputcheck(string, regex){
    return new Promise ((resolve, reject) => {

  
    //var getinput = prompt(string);
    var result = false //utility.testregex(getinput, regex);

    //var result = testregex(getinput, regex)
    while(!result){
        var getinput = prompt(string);
        
        result =utility.testregex(getinput, regex)
        if(result){
            resolve()
        break;
        }
    }
})
}

// function testregex(inputvalue, regex){

//     if(regex.test(inputvalue)){
//         //console.log("Valid Password");
//         return true;
        
//     }else
//         //console.log("Invalid Password");
//         return false;


// }
inputcheck("Enter FristName: ", firstnameregex)
.then(()=>inputcheck("Enter LastName: ", lastnameregex))
.then(()=>inputcheck("Enter MailId: ", MailIdregex))
.then(()=>inputcheck("Enter the Mobilenumber: ", Mobilenumberregex))
.then(()=>inputcheck("Enter Password: ", Passwordregex))

