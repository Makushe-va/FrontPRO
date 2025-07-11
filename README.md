ДЗ 34. Фільтрація карток по категорії

Є кілька «карток» товарів з атрибутом data-category (наприклад, "fruit", "vegetable"). Є селект з фільтрами. Коли користувач обирає категорію — показуються лише ті картки, що їй відповідають.

<select id="filter">
<option value="all">Усі</option>
<option value="fruit">Фрукти</option>
<option value="vegetable">Овочі</option>
</select>

<div class="card" data-category="fruit">🍎 Яблуко</div>
<div class="card" data-category="vegetable">🥕 Морква</div>
<div class="card" data-category="fruit">🍌 Банан</div>


Очікувані дії:
1. Реагувати на зміну в <select>
2. Перебирати .card і приховувати/показувати в залежності від data-category