let a = 5, b = 3;

let result =(a>b) && (a===b);
if (result == false){
    console.log ('Well done! This statement is ' + result);
}else {
    console.log('You`ve made a mistake :(');
}


result = true && 0 && ('a' < 'Z');

if (result == 0){
    console.log ('Well done! Right answer is ' + result);
}else {
    console.log('You`ve made a mistake :(');
}


result = (a>b) || true || ('2'==2) || (false == '');

if (result == true){
    console.log ('Well done! Right answer is ' + result);
}else {
    console.log('You`ve made a mistake :(');
}


result = (a<b) && (0 == false);

if (result == false){
    console.log ('Well done! Right answer is ' + result);
}else {
    console.log('You`ve made a mistake :(');
}


result = !(2==2) || (true && '');

if (result == false){
    console.log ('Well done! Right answer is an empty string');
}else {
    console.log('You`ve made a mistake :(');
}


// or

// let a = 5; b = 3;
// console.log((a>b) && (a===b))
// console.log(true && 0 && ('a' < 'Z'))
// console.log((a>b) || true || ('2'==2) || (false == ''))
// console.log((a<b) && (0 == false))
// console.log(!(2==2) || (true && ''))




let i=1;
while (i<10){
    console.log(i**2);
    i++;

}



function compareNumbers (number1, number2){
    if (number1>number2){
        return number1
    } else if (number1<number2){
        return number2
    }else{
        return "Numbers are equal"
    }

}

console.log("The bigger number is " + compareNumbers(2,6))