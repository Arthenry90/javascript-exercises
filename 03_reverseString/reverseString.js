const reverseString = function(string) {
    
    let test = string.split("");
    let result = "";
    const length = string.length - 1;
    for(let i = 0; i <= length; i++){
        result+= test[length - i];

    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
