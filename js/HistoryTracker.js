"use strict";

class HistoryTracker {
    constructor() {
        this.historyStack = [];
        window.addEventListener('popstate', (event)  => {
            console.log("popstate event:", window.location.pathname);
            console.log("historyOfTransit:", this.historyStack);
        });
    }

    push(url){
        history.pushState({path: url}, "", url);
        this.historyStack.push(url);
        console.log("Added URL:", url);
        console.log("history of transit:", this.historyStack);
    }
    back(){
        history.back();
    }
}

const history = new HistoryTracker();

history.push("/home");
history.push("/about");
history.push("/contact");

setTimeout(() => {
    history.back();
}, 1000);