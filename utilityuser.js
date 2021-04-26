
module.exports = {
     testregex(inputvalue, regex){

        if(regex.test(inputvalue)){
            //console.log("Valid Password");
            return true;
            
        }else
            //console.log("Invalid Password");
            return false;
    
    
    }
}


