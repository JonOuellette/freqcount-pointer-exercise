// add whatever parameters you deem necessary
sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Examples:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false


function sameFrequency(num1, num2){
    num1 = num1.toString();
    num2 = num2.toString();

    if(num1.length !== num2.length) return false;

    let num1Freq = createFrequencyCounter(num1);
    let num2Freq = createFrequencyCounter(num2);

    for(let key of num1Freq.keys()){
        if(num1Freq.get(key) !== num2Freq.get(key)) return false;

    }
    return true;
}


function createFrequencyCounter(nums){
    let freq = new Map();

    for (let num of nums) {
        let valCount = freq.get(num) || 0
        freq.set(num, valCount +1)
    }
    return freq;
}