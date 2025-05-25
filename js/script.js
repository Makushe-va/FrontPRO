'use strict';

let name = prompt('Назвіть своє імʼя');
if (name) {
    let showGreeting = confirm(`Ви хочете бачити привітання?`);
    if (showGreeting) {
        alert(`Привіт, ${name}. Бажаємо Вам гарного дня`)
    }
}
