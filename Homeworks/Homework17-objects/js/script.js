//   ------------------Assignment----------------------
// Написать метод который вернет срока вида "html - 5"

let skill = {
    name: 'html',
    level: 5,
    skillName: function () {
        return this.name + " - " + this.level;
    }
};

console.log(skill.skillName());


//   ------------------Assignment----------------------
//     Создайте объект calculator с методами:
// - sum () возвращает сумму двух значений
// - mul () возвращает произведение этих двух значений
// - инициализировать объект через функцию-конструктор

// ------------------FIRST VARIANT----------------------

let calculator = {
    calc: function (number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
        this.sum = function () {
            return this.number1 + this.number2;
        };
        this.mul = function () {
            return this.number1 * this.number2;
        };
    }
}

let calculator1 = new calculator.calc(5, 7);
let calculator2 = new calculator.calc(3, 3);

alert(calculator1.sum());
alert(calculator2.mul());

// ------------------SECOND VARIANT----------------------

// function calculator(number1, number2) {
//     this.number1 = number1;
//     this.number2 = number2;
//     this.sum = function () {
//         return this.number1 + this.number2;
//     };
//     this.mul = function () {
//         return this.number1 * this.number2;
//     };

// };


// let calculator1 = new calculator(5, 7);
// let calculator2 = new calculator(3, 3);

// alert(calculator1.sum());
// alert(calculator2.mul());

// ------------------THIRD VARIANT (without constructor-function)----------------------

// let calculator = {
//     number1: 5,
//     number2: 7,
//     sum: function () {
//         return this.number1 + this.number2;
//     },
//     mul: function () {
//         return this.number1 * this.number2;
//     }

// }
// alert(calculator.sum());
// alert(calculator.mul());