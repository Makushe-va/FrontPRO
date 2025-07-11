'use strict';

// 1. We find the select tag and all the cards
const filterSelect = document.getElementById('filter');
const cards = document.querySelectorAll('.card');
// 2. Tracking the change of value in the select
filterSelect.addEventListener('change', function () {
    const selectedCategory = this.value;

    // 3. We go through all the cards. If all or one of the categories is selected - show. Otherwise - hide
    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});
