const repeatString = function(string,num) {

let phrase = string;
    for(let i = 0; i < num; i++){
    phrase += string;
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
