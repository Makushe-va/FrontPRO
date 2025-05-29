'use strict';
// The username is fixed, so we use const
const userName =`John Doe`;

// The user's age can change, so we use let
let userAge = 25;

// Is the user verified? The verification status doesn't change, so we use const
const isVerified = true;

//The registration date doesn't change, so we use const
const registrationDate = "2025-05-10";

//The user's card number is constant, so we use const
const cardNumber = 66165368631246833286n;

// Promo code if available. The value may change, so we use let
let promoCode = null;

// The reserve name is undefined, but it may appear, so we use let
let reserveName;

// The number of bonuses as a number. The value may change, so we use let
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