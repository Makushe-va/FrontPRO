'use strict';

function View(containerSelector, formSelector) {
    this.container = document.querySelector(containerSelector);
    this.form = document.querySelector(formSelector);
}

View.prototype.clearForm = function() {
    this.form.reset();
};

View.prototype.renderSingle = function(item) {
    const wrapper = document.createElement("div");
    wrapper.className = 'col-4';
    wrapper.innerHTML = `
        <div class="taskWrapper" data-id="${item.id}">
            <div class="taskHeading">${item.title}</div>
            <div class="taskDescription">${item.description}</div>
            <div class="form-check">
                <input class="form-check-input complete-checkbox" type="checkbox" ${item.completed ? 'checked' : ''}>
                <label class="form-check-label">Завершено?</label>
            </div>
            <button class="btn btn-danger btn-sm delete-btn mt-2">Delete</button>
        </div>
    `;
    this.container.append(wrapper);
};

View.prototype.renderList = function(items) {
    this.container.innerHTML = '';
    items.forEach(item => this.renderSingle(item));
};
