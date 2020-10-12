let arr = [1, 9, 22, 7, 6];
arr.splice(3, 0, 8);
console.log(arr);

arr = [];


function getRandomNumber (max, min) { 
    if ( min => 0 && max > 0){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    };
};

arr = [];

function setRandomNumber (number) {
    for (let arrElement = 0; arrElement < number; arrElement++) {
       arr.push(getRandomNumber(100, 0));
    };

    return arr;
};

console.log(setRandomNumber(10));

let userInput = prompt("Input your number", 0);
userInput = parseInt(userInput);
let result = arr.indexOf(userInput);

if (result != -1){
    console.log(`Number ${userInput} is in the list.`)
}else {
    console.log(`Number ${userInput} is not in the list.`)
};


function longestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ipsam?"));


arr = [8, 6, 12, 10];
let squareArr = arr.map(function(number) {
return number**2;
});
console.log(squareArr);
