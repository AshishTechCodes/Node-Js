const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Listener for the 'greet' event
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emitting the 'greet' event
myEmitter.emit('greet', 'Alice'); // Output: Hello, Alice!