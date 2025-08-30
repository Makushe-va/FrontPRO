export class Controller {
    model = null;
    view = null;
    currentFilter = "all";
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.addBtn.addEventListener("click", () => this.handleAddTask());
        this.view.taskList.addEventListener("click", e => {
            const li = e.target.closest("li");
            if (!li) return;
            const id = Number(li.dataset.id);
            if (e.target.classList.contains("done-btn")) {
                this.model.toggleTask(id);
                this.updateView();
            }
            if (e.target.classList.contains("delete-btn")) {
                this.model.deleteTask(id);
                this.updateView();
            }
        });
        this.view.filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                this.currentFilter = btn.dataset.filter;
                this.updateView();
            });
        });
        this.updateView();
    }
    handleAddTask() {
        const text = this.view.getInputText();
        if (!text) return;
        const newTask = this.model.addTask(text);
        this.view.clearInput();
        if (this.currentFilter !== "completed") {
            this.view.addTaskToDOM(newTask);
        }
        this.view.updateCounters(this.model.getCounts());
    }
    updateView() {
        const tasks = this.model.getTasks(this.currentFilter);
        this.view.renderTasks(tasks);
        this.view.updateCounters(this.model.getCounts());
    }
}
