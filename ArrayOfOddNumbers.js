//Approach - 1, by using filter.
var inputArray = [11,12,13,14,15,16,17,18,19,20];

var output = inputArray.filter(function(inputArray){
    return (inputArray & 1) !== 0;
});
console.log(output);



//Approach - 2, by using array push and pop.
var inputNumbers = [91,92,93,94,95,96,97,98,99];

function getOddNumbers(input, popFunction){
    var value = input.pop();
    popFunction(value);
    if(input.length > 0) getOddNumbers(input,popFunction);
}

var oddNumbers = [];
getOddNumbers(inputNumbers, function(number){
    if(number % 2 !== 0) {
        oddNumbers.push(number);
    }
});
console.log(oddNumbers);
