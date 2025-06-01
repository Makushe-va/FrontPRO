# ДЗ 11. Особиста інформація + сесія в браузері
You need to create a program that:
1. Receives input from the user via prompt and confirm
2. Creates a session object containing all the collected information
3. Has a nested object and an array
4. Uses all data types

Steps:
1. Data collection via browser:
a) Ask for a name (prompt) → string;
b) Ask for age → number (convert from a string);
c) Ask if the user wants to receive notifications (confirm) → boolean;
d) Create a fake userId as a bigInt (you can just manually write 1234567890123456789n);
e) Set the lastLogin field to null;
f) Create a nickname field, but do not set a value (leave undefined);
g) Add a favoriteTech array of three technologies (any);
h)Add a nested settings object with fields:
    -theme: "dark" or "light"
    -autoLogin: false
2. Create a session object that will contain all this data.
3. Output:
   1) alert with short information: "Hello, [name]! Your ID is [userId]"
   2) In console.log — the entire object
   3) In console.log — the type of each field (via typeof)