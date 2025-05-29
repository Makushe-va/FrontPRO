'use strict';
// Імʼя користувача фіксоване тому const
const userName =`John Doe`;

// Вік користувача може змінюватися тому let
let userAge = 25;

// Чи верифікований користувач? Статус верифікації незмінний тому const
const isVerified = true;

//Дата реєстрації не зміна тому const
const registrationDate = "2025-05-10";

//Номер картки користувача незмінний тому const
const cardNumber = 66165368631246833286n;

// Промокод якщо є. Може змінитися значення тому let
let promoCode = null;

// Резервне імʼя undefined але може зʼявитися тому let
let reserveName;

// Кількість бонусів числом, Може змінитися значення тому let
let bonusBalance = 250;

console.log(`Користувач ${userName}, вік ${userAge}, має бонусів ${bonusBalance}`);
console.log(`Верифікація: ${isVerified ? "так" : "ні"}. Промокод: ${promoCode ?? "немає"}.`);
console.log(`Зареєстрований з ${registrationDate}. Номер картки: ${cardNumber}.`);

console.log("Ім’я:", typeof userName);
console.log("Вік:", typeof userAge);
console.log("Верифікований:", typeof isVerified);
console.log("Дата реєстрації:", typeof registrationDate);
console.log("Номер картки:", typeof cardNumber);
console.log("Промокод:", typeof promoCode);
console.log("Резервне ім’я:", typeof reserveName);
console.log("Бонуси:", typeof bonusBalance);