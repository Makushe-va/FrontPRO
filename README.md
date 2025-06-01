# ДЗ 10. Особиста картка користувача + список друзів
1. Create a user object that has the following properties:
name — string (username)
age — number (age)
isOnline — boolean value (whether online)
friends — an array of 3 friends' names (strings)
settings — nested object with fields:
theme — string ("light" or "dark")
notifications — boolean value (whether notifications are enabled)
2. Create a separate variable firstFriendName, which will receive the value of the first friend from the user.friends array.
3. Create a separate notificationEnabled variable that will receive the value from user.settings.notifications.
4. Output to the console:
   User name
   Number of friends (not via method, just .length)
   First friend's name
   Which theme is enabled
   Are notifications enabled?
