'use strict';

let userName = prompt(`Назвіть своє імʼя`);
console.log(`Імʼя`, userName, typeof userName);

let userAge = Number (prompt(`Скільки Вам років?`));
console.log(`Вік`, userAge, typeof userAge);

let userConsent = confirm(`Чи згодні Ви прийняти участь?`);
console.log(`Згода`, userConsent, typeof userConsent);

let userId = 661653686312468386n;
console.log(`ID` , userId, typeof userId);

let bonusCode = null;
console.log(`Бонус-код`, bonusCode, typeof bonusCode);

let secondName;
console.log(`Прізвище`, secondName, typeof secondName);

alert(`Привіт, ${userName}!
Твій вік ${userAge}
Твій статус ${userConsent}
`);









