export class View {
    taskInput = null;
    addBtn = null;
    taskList = null;
    doneCount = null;
    activeCount = null;
    filterButtons = null;
    constructor() {
        this.taskInput = document.getElementById("taskInput");
        this.addBtn = document.getElementById("addBtn");
        this.taskList = document.getElementById("taskList");
        this.doneCount = document.getElementById("doneCount");
        this.activeCount = document.getElementById("activeCount");
        this.filterButtons = document.querySelectorAll(".filters button");
    }

    getInputText() {
        return this.taskInput.value.trim();
    }
    clearInput() {
        this.taskInput.value = "";
    }
    renderTasks(tasks) {
        this.taskList.innerHTML = "";
        tasks.forEach(task => this.addTaskToDOM(task));
    }
    addTaskToDOM(task) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.dataset.id = task.id;
        if (task.completed) li.classList.add("completed");
        const span = document.createElement("span");
        span.textContent = task.text;
        const btnGroup = document.createElement("div");
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.className = "btn btn-success btn-sm me-2 done-btn";
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "btn btn-danger btn-sm delete-btn";
        btnGroup.appendChild(doneBtn);
        btnGroup.appendChild(delBtn);
        li.appendChild(span);
        li.appendChild(btnGroup);
        this.taskList.appendChild(li);
    }
    updateCounters({ completed, active }) {
        this.doneCount.textContent = completed;
        this.activeCount.textContent = active;
    }
}
