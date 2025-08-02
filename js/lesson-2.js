// Завдання 1

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// const idx = styles.indexOf('blues');
// if (idx !== -1) {
//   styles[idx] = 'classic';
// }

// // console.log(styles);

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(styles);

// Завдання 2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogin(array) {
//   const guestName = prompt('What is your name?');
//   const lowerCaseGuestName = guestName.toLowerCase();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].toLowerCase() === lowerCaseGuestName) {
//       return alert(`Welcome, ${guestName}`);
//     }
//   }

//   return alert('User not found');
// }

// checkLogin(logins);

// Завдання 3
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage() {
//   let totalSum = 0;
//   let count = 0;
//   for (let arg of arguments) {
//     if (typeof arg === 'number') {
//       totalSum += arg;
//       count++;
//     }
//     if (count === 0) {
//       return 0;
//     }
//   }

//   return `Average ${totalSum / count}`;
// }

// // console.log(calculateAverage(1, 2, 3, true));
// console.log(calculateAverage(true));

// Завдання 4
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumNumbers(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     console.log(array[i]);

//     newArray.push(array[i] + array[i + 1]);
//   }
//   return newArray;
// }
// console.log(sumNumbers(someArr));

// Завдання 5

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(array) {
//   if (Array.isArray(array)) {
//     let min = numbers[0];
//     for (const num of numbers) {
//       if (num < min) {
//         min = num;
//       }
//     }
//     return min;
//   }
//   return 'Sory, it is not an array!';
// }

// console.log(findSmallestNumber(numbers));

// Завдання 6

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//   const arrayFromString = string.split(' ');
//   let longestWord = arrayFromString[0];
//   for (let i = 0; i < arrayFromString.length; i++) {
//     if (arrayFromString[i].length > longestWord.length) {
//       longestWord = arrayFromString[i];
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord('London is the capital of Great Britain'));

// Завдання 7

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// user.name
// user['name']
// const key = 'name' ; user[key]

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key} : ${user[key]}`);
// }

// const userArrs = Object.entries(user);
// console.log(userArrs);

// for (const arr of userArrs) {
//   console.log(arr);
// }

// Завдання 8

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470
// };

// let sum = 0;
// const values = Object.values(salaries);

// for (const value of values) {
//   sum += value;
// }

// console.log(sum);

// Завдання 9

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'
// const calculator = {
//   read(a, b) {
//     this.key1 = a;
//     this.key2 = b;
//   },
//   sum() {
//     if (!this.exist()) {
//       return 'No such propeties';
//     }
//     return this.key1 + this.key2;
//   },
//   mult() {
//     if (!this.exist()) {
//       return 'No such propeties';
//     }
//     return this.key1 * this.key2;
//   },
//   exist() {
//     return this.key1 !== undefined && this.key2 !== undefined;
//   }
// };

// // calculator.read(2, 3);
// // calculator.sum();
// console.log(calculator.mult());

// console.log(calculator.sum());

// Завдання 10

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: 'Яблуко', price: 45, quantity: 7 },
//   { name: 'Апельсин', price: 60, quantity: 4 },
//   { name: 'Банан', price: 125, quantity: 8 },
//   { name: 'Груша', price: 350, quantity: 2 },
//   { name: 'Виноград', price: 440, quantity: 3 },
//   { name: 'Банан', price: 125, quantity: 3 }
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let total = 0;
//   for (const obj of fruits) {
//     if (obj.name.toLowerCase() === fruitName.toLowerCase()) {
//       total += obj.price * obj.quantity;
//     }
//   }
//   return total;
// }

// console.log(calcTotalPrice(fruits, 'БаНан'));
