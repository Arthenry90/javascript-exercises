const sumAll = function(IntegerStart, IntegerEnd) {
    
    let sumResult = 0;
    for(IntegerStart; IntegerStart <= IntegerEnd; IntegerStart++){
        sumResult += IntegerStart;
    }
    return sumResult;
};

// Do not edit below this line
module.exports = sumAll;
