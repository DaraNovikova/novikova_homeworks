let arr = [1, 9, 22, 7, 6];
arr.splice(3, 0, 8);
console.log(arr);

arr = [];

function randomNumber (number){
    for (let arrElement = 0; arrElement < number; arrElement++) {
       arr.push(Math.floor (Math.random () * 101));
    };

    return arr;
}
console.log(randomNumber(10));

function checkNumber (userNumber){
    for (let item of arr) {
        console.log((item == userNumber)? `Number ${userNumber} is in list.`:`Number ${userNumber} is not in list.`);
        item+=1;
    }

};

console.log(checkNumber(prompt("Input your number", 0)));



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
