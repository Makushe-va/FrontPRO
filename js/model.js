export class BusModel {
    constructor() {
        this.topics = Object.create(null); // { topicName: Set<Function> }
    }
    addHandler(topicName, handlerFunction) {
        if (!this.topics[topicName]) {
            this.topics[topicName] = new Set();
        }
        this.topics[topicName].add(handlerFunction);
    }
    removeHandler(topicName, handlerFunction) {
        if (!this.topics[topicName]) {
            return;
        }
        this.topics[topicName].delete(handlerFunction);

        if (this.topics[topicName].size === 0) {
            delete this.topics[topicName];
        }
    }
    getHandlers(topicName) {
        return this.topics[topicName] ? Array.from(this.topics[topicName]) : [];
    }
}
