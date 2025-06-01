'use strict';
//We create a user object with properties
const user = {
    name: 'John',
    age: 32,
    isOnline: true,
    friends: ['Den', 'Alice', 'Ben'],
    settings:{
        theme: 'light',
        notification: true
    }
}

/* We create a separate variable firstFriendName, which will receive the value of the first friend from the user.friends array.
 */

const firstFriendName = user.friends[0];

//We create a separate notificationEnabled variable, which will receive the value from user.settings.notifications.

const notificationsEnabled = user.settings.notification;

// We output to the console the user-name.
console.log(user.name);

// We output to the console the number of friends.
console.log(user.friends.length);

// We output the name of the first friend to the console.
console.log(user.friends[0]);
//the second option is to refer to the variable firstFriendName that was created
console.log(firstFriendName);

//We display in the console which theme is enabled.
console.log(user.settings.theme);

//We output to the console whether notifications are enabled.
console.log(user.settings.notification);
//the second option is to refer to the variable notificationsEnabled that was created