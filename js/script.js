'use strict';

// Data collection via browser:

const name = prompt('What is your name?');
let age = Number(prompt('What is your age?'));
const wantsNotifications = confirm('Do you want to receive notifications?');
const userID = 12345678900998765556n;
const lastLogin = null;
let nickName;
const favoriteTech = ["JavaScript", "HTML", "CSS"];
const settings = {
    theme: 'dark',
    autologin: false,
}

// Creates a session object containing all the collected information(user name, user age.....)

const session = {
    name,
    age,
    wantsNotifications,
    userID,
    lastLogin,
    nickName,
    favoriteTech,
    settings
};

// display alert.
alert(`Привіт, ${session.name}! Ваш ID: ${session.userID}`);

// We output the entire object to the console.
console.log(session);

//We output the type of each field to the console.
console.log('name', typeof name);
console.log('age', typeof age);
console.log('wantsNotifications', typeof wantsNotifications);
console.log('userID', typeof userID);
console.log('lastLogin', typeof lastLogin);
console.log('nickName', typeof nickName);
console.log('favoriteTech', typeof favoriteTech);
console.log('settings', typeof settings);

