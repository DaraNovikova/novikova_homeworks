// 8. Выведите 10 случайных чисел с помощью цикла

function getRandomNumber (max, min){
    if(min > 0 && max > 0){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    };
}

for (let arrElement = 0; arrElement < 10; arrElement++) {
    console.log(getRandomNumber(10, 1));
 };


// 10. Дан массив [1, 2, 3]. Добавьте ему на начало элементы 4, 5, 6.
let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(0,3);
console.log(newArr);

// 13. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый элементы [1, 2, 10, 11, 5].

arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 10, 11);
console.log(arr);

// 15. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает
// значения, каким заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill ( 'x', 5) сделает массив [ 'x', 'x',
// 'x', 'x', 'x'].

function arrayFill (arrayElement, arrayLength) {
    let array = [];
    for (let i = 0; i < arrayLength; i++) {
        array.push(arrayElement);
        
    }
    return array ;
}

console.log(arrayFill(prompt('Input array element', 0), prompt('Input array length', 0)));

// 16. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

arr = [5, 6, 7];
let num = 1;
let result = arr.reduce(function(sum, elem) {
	if (sum > 10) {
		return num;
	} else {
		num++;
		return sum + elem;
	}
}); 
console.log(`Чтобы сумма была больше 10-ти, нужно сложить ${result} элемента/ элементов с начала массива: [${arr}].`);


// 17. Заполните массив 10-й случайными числами от 1 до 10 с помощью цикла

function getRandomNumber (max, min){
    if(min > 0 && max > 0){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    };
};

arr = [];

function setRandomNumber (number){
    for (let arrElement = 0; arrElement < number; arrElement++) {
       arr.push(getRandomNumber(10, 1));
    };

    return arr;
};

console.log( setRandomNumber(10));

// 18. Таблица умножения в цикле

for (let i = 2; i < 10; i++) {
    for (let j = 2; j < 10; j++) {
        console.log(`${i} * ${j} = ` + i*j);
        
    };
    
};

// 19. Дан массив с числами. Или не используя метода reverse переверните его элементы в обратном порядке.

arr = [1, 2, 3, 4, 5];
newArr = arr.sort(( a, b ) =>  b - a);

console.log(newArr);


// 20. Дано двумерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива.

arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		sum += arr[i][j];
	}
}
console.log("Cуммa элементов массива равняется:", sum);

// 21. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и
// возвращает сумму его цифр.

function getDigitsSum (digit){
    let str = String(digit);
    sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
};

console.log(getDigitsSum(prompt("Input your digit", 0)));


// 22. Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа.
//  Создайте для этого вспомогательную функцию isPositive (), которая параметром будет принимать число и 
// возвращать true, если число положительное, и false - если отрицательное.

arr = [1, -1, 2, -2, 3];
newArr = [];

function isPositive (number) {
    if (number > 0) {
        return true;
    }else{
        return false;
    };
};

for (let i = 0; i < arr.length; i++) {
    if (isPositive(arr[i])) {
        newArr.push(arr[i]);
    };
    
};

console.log(newArr);

// 23. С помощью цикла вывести все трицифрови числа в которых сумма всех цифр равна - 9 Например: 2 + 4 + 3 = 9

function getSumOfDigets (digit){ 
    let str = String(digit);
    if (str.length == 3) { 
        sum = 0;    
        for (let i = 0; i < str.length; i++) {
            sum += Number(str[i]);
        }
        if (sum == 9){
            return sum;
        }else{
            return `Sum is not 9`;
        };
    }else{
        return `Please, enter number of threes`;
    };
    
};

console.log(getSumOfDigets(prompt("Input your digit", 0)));


// 24. С помощью цикла вывести пользователей как онлайн

let user = {
    Alan: {
    online: false
    },
    Jeff: {
    online: true
    },
    Sarah: {
    online: false
    }
};

// if prop online is true shows user 

for (let key in user) {
    for (let value in user[key]){
        if (user[key][value]){
            console.log(key);
        };
    };
};

// shows all users as online 

for (let key in user) {
    if (user.online == true){
        console.log (key);
    }else{
        user.online == true;
        console.log (key);
    };
};




