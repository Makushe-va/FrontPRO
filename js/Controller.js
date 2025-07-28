'use strict';

function Controller(model, view) {
    this.model = model;
    this.view = view;
    this.init();
};

Controller.prototype.init = function() {
    this.model.load();
    this.view.renderList(this.model.items);
    this.view.form.addEventListener('submit', this.handleSubmit.bind(this));
    this.view.container.addEventListener('click', this.handleDelete.bind(this));
    this.view.container.addEventListener('change', this.handleCheckboxChange.bind(this)); // нове

    document.getElementById("clearForm").addEventListener("click", () => {
        this.view.clearForm();
    });

    document.getElementById("deleteAll").addEventListener("click", () => {
        localStorage.removeItem("todoItems");
        this.model.items = [];
        this.view.renderList([]);
    });
};

Controller.prototype.handleDelete = function(e) {
    if (!e.target.classList.contains('delete-btn')) return;
    const taskWrapper = e.target.closest('.taskWrapper');
    if (!taskWrapper) return;
    const id = Number(taskWrapper.getAttribute('data-id'));
    this.model.remove(id);
    taskWrapper.parentElement.remove();
};

Controller.prototype.handleSubmit = function(e) {
    e.preventDefault();
    const f = this.view.form;
    const title = f.title.value.trim();
    const description = f.description.value.trim();
    if (!title || !description ) return alert("Please enter a data!");
    const item = this.model.add(title, description);
    this.view.renderSingle(item);
    this.view.clearForm();
};

Controller.prototype.handleCheckboxChange = function(e) {
    if (!e.target.classList.contains('complete-checkbox')) return;
    const wrapper = e.target.closest('.taskWrapper');
    const id = Number(wrapper.getAttribute('data-id'));
    const item = this.model.items.find(item => item.id === id);
    if (item) {
        item.completed = e.target.checked;
        this.model.save();
    }
};
