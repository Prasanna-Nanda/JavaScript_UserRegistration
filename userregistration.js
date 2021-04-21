console.log("Welcome to User Registration")


const prompt = require('prompt-sync')();

var firstnameregex = new RegExp("(^[A-Z]{1})[a-z]{2,}");
var lastnameregex = new RegExp("(^[A-Z]{1})[a-z]{2,}");
var MailIdregex = new RegExp("(^[a-z]{3,}.)|([a-z]{3,})@([a-z]{2,}.[a-z]{2})|(.[a-z]{2})");
var Mobilenumberregex = new RegExp("(^[9][1][1][1])\\$[0,1][0-9][10]");
var Passwordregex = new RegExp('^(?=.?[A-Z])(?=.?[0-9])(?=.?[a-z])(?=.[#?!@$%^&*-]).{8,}$');

function inputcheck(string, regex){
    var getinput = prompt(string);
    var result = testregex(getinput, regex)
    while(!result){
        var getinput = prompt(string);
        result = testregex(getinput, regex)
        if(result){
        break;
        }
    }

}
function testregex(inputvalue, regex){

    if(regex.test(inputvalue)){
        //console.log("Valid Password");
        return true;
        
    }else
        //console.log("Invalid Password");
        return false;



}
inputcheck("Enter FristName", firstnameregex);
inputcheck("Enter LastName", lastnameregex);
inputcheck("Enter MailId", MailIdregex);
inputcheck("Enter the Mobilenumber", Mobilenumberregex);
inputcheck("Enter Password", Passwordregex);
