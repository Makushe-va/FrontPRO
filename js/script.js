'use strict';

// We ask the user his year of birth, in which city he lives and what is his favorite sport.
// If he click "CANCEL" we display a message in Alert

const yearBirth = prompt('Enter your year of birth');
if (yearBirth === null) {
    alert("It's a pity that you didn't enter the year of birth.");
} else {
   // We calculate the age of the user, for this we need the current date and the year of birth entered by the user
    const year = +yearBirth;
    const currentYear = new Date().getFullYear();
    const ageUser = currentYear - year;

    const city = prompt('In which city do you live?');
    if (city === null) {
        alert("It's a pity that you didn't want to write your city.");
    } else {
        const sport = prompt('What is your favorite sport?');
        if (sport === null) {
            alert("It's a pity that you didn't want to write about your favorite sport.");
        } else {
//We create a message about the city:
let cityMessage;
switch (city){
    case 'Kyiv':
        cityMessage = `You live in the capital of Ukraine!`;
        break;
        case 'London':
            cityMessage = `You live in the capital of Great Britain!`;
            break;
            case 'Washington':
                cityMessage = `You live in the capital of USA!`;
                break;
                default:
                    cityMessage = `You live in the city ${city}!`;
}
//We create a message about the sport:
let sportMessage;
switch (sport){
    case 'football':
        sportMessage = `Cool! Do you want to become like Diego Maradona?`;
        break;
        case 'tennis':
            sportMessage = `Cool! Do you want to become like Rafail Nadal?`;
            break;
            case 'hockey':
                sportMessage = `Cool! Do you want to become like Wayne Gretzky?`;
                break;
                default:
                    sportMessage = `Your favorite sport ${sport}`
}
// We show everything in one alert:

alert(`You are ${ageUser} years old ${cityMessage}, ${sportMessage}`);}}}
