const Queue = require('./QueueUsingLL');

let q = new Queue();
q.enqueue('Microsoft');
q.enqueue('Google');
q.enqueue('Facebook');
q.enqueue('Netflix');

console.log(q.peek());
console.log(q);

console.log(q.dequeue());
console.log(q);
