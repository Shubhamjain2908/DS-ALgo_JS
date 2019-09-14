const Stack = require('./StackUsingLL');

let st = new Stack();
st.push(21);
st.push(23);
st.push(22);
st.push(29);
console.log(st.peek());
console.log(st.pop());
console.log(st);
// st.print();