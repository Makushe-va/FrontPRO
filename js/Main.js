'use strict';

const appModel = new Model();
const appView = new View('[data-todo-items]', '#todoForm');
const appController = new Controller(appModel, appView);
