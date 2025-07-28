

function TodoItem(title, description){
    this.title = title;
    this.description = description;
    this.id = Date.now();
    this.completed = false;
}

function Model(){
    this.items = [];
}

Model.prototype.load = function(){
    const raw = localStorage.getItem("todoItems");
    this.items = raw ? JSON.parse(raw) : [];
};

Model.prototype.save = function(){
    localStorage.setItem('todoItems', JSON.stringify(this.items))
};

Model.prototype.add = function(title, description){
    const item = new TodoItem(title, description);
    this.items.push(item);
    this.save();
    return item;
};

Model.prototype.remove = function(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.save();
};