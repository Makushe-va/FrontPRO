import { BusModel } from './Model.js';
import { BusView } from './View.js';

export class BusController {
    constructor() {
        this.model = new BusModel();
        this.view = new BusView();
    }
    on(topicName, handlerFunction) {
        this.model.addHandler(topicName, handlerFunction);
        return () => this.off(topicName, handlerFunction);
    }
    off(topicName, handlerFunction) {
        this.model.removeHandler(topicName, handlerFunction);
    }
    emit(topicName, payload, delay = 0) {
        const handlerList = this.model.getHandlers(topicName);
        if (!handlerList.length) {
            return;
        }
        setTimeout(() => {
            for (const handlerFunction of handlerList) {
                handlerFunction(payload);
            }
        }, delay);
    }
    log(messageText, dataObject) {
        this.view.log(messageText, dataObject);
    }
}


