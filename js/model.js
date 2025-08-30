export class Task {
    id = null;
    text = null;
    completed = false;
    constructor(text, id = null, completed = false) {
        this.id = id || Date.now();
        this.text = text;
        this.completed = completed;
    }
}
export class Model {
    tasks = [];
    constructor() {
        this.load();
    }
    addTask(text) {
        const task = new Task(text);
        this.tasks.push(task);
        this.save();
        return task;
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.save();
    }
    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) task.completed = !task.completed;
        this.save();
    }
    getTasks(filter = "all") {
        if (filter === "active") return this.tasks.filter(t => !t.completed);
        if (filter === "completed") return this.tasks.filter(t => t.completed);
        return this.tasks;
    }
    getCounts() {
        const completed = this.tasks.filter(t => t.completed).length;
        const active = this.tasks.length - completed;
        return { completed, active };
    }
    save() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
    load() {
        const data = localStorage.getItem("tasks");
        if (data) {
            const parsed = JSON.parse(data);
            this.tasks = parsed.map(t => new Task(t.text, t.id, t.completed));
        }
    }
}