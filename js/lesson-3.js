// Завдання 1

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// // 1.1
// // const doubleNumb = numbers.map(num => num ** 2);

// // console.log(doubleNumb);

// // 1.2
// const getDoubleNumbers = array => {
//   return array.map(el => el ** 2);
// };

// console.log(getDoubleNumbers(numbers));

// Завдання 2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] }
// ];

// 2.1;
// const dataValues = data.flatMap(elem => elem.values);
// console.log(dataValues);

// 2.2;
// const getValues = array => {
//   return array.flatMap(elem => elem.values);
// };

// console.log(getValues(data));

// Завдання 3

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 }
// ];

// 3.1;
// const youngAge = people.some(obj => obj.age < 20);
// console.log(youngAge);

// 3.2;
// const showYounger = array => {
//   return array.some(obj => obj.age < 20);
// };
// console.log(showYounger(people));

// Завдання 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// 4.1;
// const evenNumb = numbers.every(num => num % 2 === 0);
// console.log(evenNumb);

// 4.2;
// const checkForEven = array => {
//   return array.every(num => num % 2 === 0);
// };
// console.log(checkForEven(numbers));

// Завдання 5
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// 5.1;
// const oddNumber = numbers.find(element => element % 2 === 1);
// console.log(oddNumber);

// 5.2;

// const findFirstOddNumber = array => {
//   return array.find(element => element % 2 === 1);
// };
// console.log(findFirstOddNumber(numbers));

// Завдання 6
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// 6.1;
// const sortedArray = numbersArray.toSorted((a, b) => a - b);
// console.log(sortedArray);

// 6.2;
// const toSort = array => {
//   return array.toSorted((a, b) => a - b);
// };
// console.log(toSort(numbersArray));

// // Завдання 7
// // Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
// //  у порядку алфавіту.
// // Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// 7.1;
// const alphabetArray = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(alphabetArray);

// 7.2;
// const alphabetSorter = array =>
//   array.toSorted((firstWord, secondWord) =>
//     firstWord.localeCompare(secondWord)
//   );

// console.log(alphabetSorter(stringArray));

// Завдання 8
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 }
// ];

// 8.1;
// const sortedObj = users.toSorted((objOne, objTwo) => objOne.age - objTwo.age);
// console.log(sortedObj);

// 8.2;
// const sortTheObj = array => {
//   return array.toSorted((objOne, objTwo) => objOne.age - objTwo.age);
// };

// console.log(sortTheObj(users));

// // Завдання 9

// // Дано масив об'єктів.
// // Створіть новий масив, що містить тільки об'єкти, в яких
// // вік більше 20 років.
// // Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 }
// ];

// const olderThanTwenty = user.filter(obj => obj.age > 20);
// console.log(olderThanTwenty);

// const getOlderThenTwenty = arr => {
//   return arr.filter(obj => obj.age > 20);
// };

// console.log(getOlderThenTwenty(user));

// // Завдання 10
// // Дано масив чисел [1, 2, 3, 4, 5].
// // Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((counter, elem) => (counter += elem), 0);
// console.log(sum);

// const countSum = array => {
//   return array.reduce((counter, element) => (counter += element), 0);
// };

// console.log(countSum(numbers));

// 10. Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)

// const products = [
//   { name: 'Apple', category: 'fruits', price: 1.2, stock: 50 },
//   { name: 'Banana', category: 'fruits', price: 0.8, stock: 100 },
//   { name: 'Carrot', category: 'vegetables', price: 0.5, stock: 200 },
//   { name: 'Broccoli', category: 'vegetables', price: 1.0, stock: 150 },
//   { name: 'Milk', category: 'dairy', price: 1.5, stock: 20 },
//   { name: 'Cheese', category: 'dairy', price: 2.5, stock: 5 },
//   { name: 'Chicken', category: 'meat', price: 5.0, stock: 30 },
//   { name: 'Beef', category: 'meat', price: 7.0, stock: 25 }
// ];

// function getMostExpensiveMeatProduct(products) {
//     return this.toSorted(obj =>)
// }

// Завдання 11
// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   constructor() {
//     this.value = 0;
//   }
//   number(value) {
//     this.value = value;
//     return this;
//   }

//   getResult() {
//     return this.value;
//   }

//   add(value) {
//     this.value += value;
//     return this;
//   }

//   substruct(value) {
//     this.value -= value;
//     return this;
//   }

//   divide(value) {
//     if (value !== 0) {
//       this.value /= value;
//       return this;
//     }
//     console.error('На нуль не можемо ділити!');
//     return this;
//   }

//   multiply(value) {
//     this.value *= value;
//     return this;
//   }
// }

// Приклад використання:
// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .substruct(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// Завдання 12

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client1 = new Client('koma', 'koma@gmail.com');
// client1.login = 'dot';
// console.log(client1.login);

//  Завдання 13
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.gender = obj.gender;
    this.email = obj.email;
  }

  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email
    };
  }
}

class Employee extends Person {
  constructor(obj, salary, department) {
    super(obj);

    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department
    };
  }
}

const person1 = new Person({
  name: 'Ann',
  age: 42,
  gender: 'female',
  email: 'ann.sa@gmail.com'
});

const person2 = new Person({
  name: 'Back',
  age: 45,
  gender: 'male',
  email: 'back.swen@gmail.com'
});

const employee1 = new Employee(
  { name: 'Garry', age: 34, gender: 'male', email: 'garry@gmail.com' },
  25000,
  'sales'
);

console.log(person1.getDetails());
person2.hobbie = 'football';

console.log(person2.getDetails());
console.log(employee1);
console.log(employee1.getEmployeeDetails());
