"use strict";

class ObjectTracker {
    processed = null;
    constructor() {
        this.processed = new WeakSet();
    }

    // Mark object as processed
    mark(obj) {
        this.processed.add(obj);
    }

    // Check if the object has already been processed
    wasProcessed(obj) {
        return this.processed.has(obj);
    }
}

// usage example:
const tracker = new ObjectTracker();

const obj = { name: "A" };

console.log(tracker.wasProcessed(obj));
tracker.mark(obj);
console.log(tracker.wasProcessed(obj));
