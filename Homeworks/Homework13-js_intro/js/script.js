let a = 6, b = 3;
let result = (a > b)? 'a > b': 'a < b';
console.log(result) 

a = 3, b = 3;
result = (a == b)? 'a == b': 'a != b';
console.log(result) 

a = 3, b = 6;
result = (a != b)? 'is true': 'is false';
console.log("a != b " + result) 

a = 1, b = "";
result = (a === b)? 'is true': 'is false';
console.log("a === b " + result) 

console.log(('B' > 'A', 'a' > 'Z')? `B > A and a > Z is true`: `B > A and a > Z is false`)

a = false; b = 0; a>=b
result = (a>=b)? 'is true': 'is false';
console.log("a>=b " + result) 

console.log(('2' === 2)? `ok`: `not`)