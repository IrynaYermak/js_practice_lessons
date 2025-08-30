// task 1

// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector('body');

// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.getElementById('title');
console.log(titleEl);

// 3 - отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector('.list');
console.log(listEl);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topicElements = document.querySelectorAll('[data-topic]');
console.log(topicElements);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstTopicEl = listEl.firstElementChild;
console.log(firstTopicEl);

// const topicEl1 = topicElements[0];
// console.log(topicEl1);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastTopicEl = topicElements[topicElements.length - 1];
console.log(lastTopicEl);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const siblingH1 = titleEl.nextElementSibling;
console.log(siblingH1);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const titleH3 = document.querySelectorAll('h3');
titleH3.forEach(element => console.log(element.textContent));
console.log(titleH3);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

titleH3.forEach(element => element.classList.add('active'));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const navigationEl = document.querySelector('li[data-topic="navigation"]');
console.log(navigationEl);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

navigationEl.style.backgroundColor = 'yellow';

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

const textNav = navigationEl.querySelector('p');
textNav.textContent = 'Я змінив тут текст!';
// console.log(textNav);

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення,
// яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = 'manipulation';
const manipulEl = document.querySelector(`[data-topic=${currentTopic}`);
console.log(manipulEl);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

manipulEl.style.backgroundColor = 'blue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const completedHeader = document.querySelector('.completed');
console.log(completedHeader);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

const liToremove = completedHeader.parentElement;
liToremove.remove();
// closest()

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст:
// "Об'єктна модель документа (Document Object Model)"

titleEl.insertAdjacentHTML(
  'afterend',
  '<p> Об`єктна модель документа (Document Object Model)</p>'
);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML"
// а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами
//  і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P
// і готову LI закинути у кінець списку

const newLiItem = document.createElement('li');
const newLiItemHeader = document.createElement('h3');
newLiItemHeader.textContent = 'Властивість innerHTML';
const newLiItemText = document.createElement('p');
newLiItemText.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
newLiItem.prepend(newLiItemHeader, newLiItemText);
listEl.append(newLiItem);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

const newLiElement =
  '<li> <h3> Властивість innerHTML</h3> <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p> </li>';

listEl.insertAdjacentHTML('beforeend', newLiElement);

// 20 - очисти список

// listEl.textContent = '';

// task 2

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const container = document.createElement('div');

container.classList.add('number-container');
listEl.insertAdjacentElement('afterend', container);

function createBlokcs() {
  const blocks = [];

  for (let i = 0; i < 100; i++) {
    const number = randomNumber();
    const block = document.createElement('div');
    block.classList.add('number');
    block.textContent = number;
    if (number % 2 === 0) {
      block.classList.add('even');
    } else {
      block.classList.add('odd');
    }
    blocks.push(block);
  }

  return blocks;
}

container.append(...createBlokcs());

// task 3

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.
const form = document.querySelector('.js-contact-form');
const userNameInput = document.querySelector('.js-username-input');
const acceptName = document.querySelector('.js-username-output');
console.log(acceptName);

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

userNameInput.addEventListener('input', countInput);

// function countInput(event) {
//   const username = event.target.value.trim();
//   if (username.length >= 6) {
//     userNameInput.classList.remove('error');
//     userNameInput.classList.add('success');
//   } else if (username.length < 6) {
//     userNameInput.classList.remove('success');
//     userNameInput.classList.add('error');
//   }
// }

function countInput(event) {
  const user = event.target.value.trim();
  userNameInput.classList.toggle('success', user.length >= 6);
  userNameInput.classList.toggle('error', user.length < 6);
  if (user.length !== 0) {
    acceptName.textContent = user;
  } else {
    acceptName.textContent = 'Anonymous';
  }
}

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

userNameInput.addEventListener('focus', isEmpty);

function isEmpty(event) {
  event.target.style.outline =
    event.target.value.trim().length === 0
      ? '3px solid red'
      : '3px solid green';
}

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

userNameInput.addEventListener('blur', isEmpty);

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const userName = event.target.elements.userName.value.trim();
  const isChecked = event.target.elements.accept.checked;
  if (userName < 5 || !isChecked === true) {
    alert('Please, check if all fields are filled in!');
    return;
  }
  const newUser = {
    name: userName
  };
  console.log(newUser);
  event.target.reset();
  acceptName.textContent = 'Anonymous';
}

// task 4 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector('.box');
const btnDecrease = document.querySelector('.js-decrease');
const btnIncrease = document.querySelector('.js-increase');

// const currentWidth = box.offsetWidth;
// const currentHeidht = box.offsetHeight;

btnDecrease.addEventListener('click', () => changeSize(-20));
btnIncrease.addEventListener('click', () => changeSize(20));

// function decreaseClick(event) {
//   const currentWidth = box.offsetWidth;
//   const currentHeidht = box.offsetHeight;
//   box.style.width = currentWidth - 20 + 'px';
//   box.style.height = currentHeidht - 20 + 'px';
// }

// function increaseClick(event) {
//   const currentWidth = box.offsetWidth;
//   const currentHeidht = box.offsetHeight;
//   box.style.width = currentWidth + 20 + 'px';
//   box.style.height = currentHeidht + 20 + 'px';
// }

function changeSize(px) {
  const currentWidth = box.offsetWidth;
  const currentHeidht = box.offsetHeight;

  box.style.width = currentWidth + px + 'px';
  box.style.height = currentHeidht + px + 'px';
}
