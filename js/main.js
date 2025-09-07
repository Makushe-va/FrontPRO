import { BusController } from './Controller.js';

const eventBus = new BusController();

// TEST 1. Basic asynchrony.
eventBus.on('tick', (payload) => eventBus.log('tick:', payload));
eventBus.emit('tick', { step: 1 }, 0);
eventBus.log('after schedule');

// Test 2. Chain of events
eventBus.on('tick', (payload) => {
    eventBus.log('handler step:', payload.step);
    if (payload.step === 1) {
        eventBus.emit('tick', { step: 2 }, 0);
    }
});
eventBus.emit('tick', { step: 1 }, 0);

// Test 3. Unsubscribe
const unsubscribe = eventBus.on('news', (payload) => {
    eventBus.log('news:', payload);
    unsubscribe();
});

eventBus.emit('news', 'A', 0);
eventBus.emit('news', 'B', 0);

// Test 4. Several subscribers
eventBus.on('eventExample', (payload) => eventBus.log('handler1', payload));
eventBus.on('eventExample', (payload) => eventBus.log('handler2', payload));
eventBus.on('eventExample', (payload) => eventBus.log('handler3', payload));

eventBus.emit('eventExample', 42, 0);
