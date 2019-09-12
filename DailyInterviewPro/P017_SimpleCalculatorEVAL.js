/**
 * Google
 *
 * Given a mathematical expression with just single digits, plus signs, negative signs, and brackets, evaluate the expression.
 * Assume the expression is properly formed.
    Example:
    Input: - ( 3 + ( 2 - 1 ) )
    Output: -4
 */

const evaluate = (expression) => {
   expression = expression.replace(/ /g, '');
   let tokens = [...expression]

   // Stack for numbers: 'values' 
   let values = [];

   // Stack for Operators: 'ops' 
   let ops = [];

   for (let i = 0; i < tokens.length; i++) {
      // Current token is a whitespace, skip it 
      if (tokens[i] == ' ')
         continue;

      // Current token is a number, push it to stack for numbers 
      if (tokens[i] >= '0' && tokens[i] <= '9') {
         const sbuf = '';
         // There may be more than one digits in number 
         while (i < tokens.length && tokens[i] >= '0' && tokens[i] <= '9')
            sbuf += tokens[i++];
         values.push(sbuf);
      }

      // Current token is an opening brace, push it to 'ops' 
      else if (tokens[i] === '(')
         ops.push(tokens[i]);

      // Closing brace encountered, solve entire brace 
      else if (tokens[i] == ')') {
         while (ops[ops.length - 1] != '(')
            values.push(applyOp(ops.pop(), values.pop(), values.pop()));
         ops.pop();
      }

      // Current token is an operator. 
      else if (tokens[i] == '+' || tokens[i] == '-' ||
         tokens[i] == '*' || tokens[i] == '/') {
         // While top of 'ops' has same or greater precedence to current 
         // token, which is an operator. Apply operator on top of 'ops' 
         // to top two elements in values stack 
         while (!ops.length && hasPrecedence(tokens[i], ops[ops.length - 1]))
            values.push(applyOp(ops.pop(), values.pop(), values.pop()));

         // Push current token to 'ops'. 
         ops.push(tokens[i]);
      }
   }

   // Entire expression has been parsed at this point, apply remaining 
   // ops to remaining values 
   while (!ops.empty())
      values.push(applyOp(ops.pop(), values.pop(), values.pop()));

   // Top of 'values' contains result, return it 
   return values.pop();
}

// Returns true if 'op2' has higher or same precedence as 'op1', 
// otherwise returns false. 
const hasPrecedence = (op1, op2) => {
   if (op2 == '(' || op2 == ')')
      return false;
   if ((op1 == '*' || op1 == '/') && (op2 == '+' || op2 == '-'))
      return false;
   else
      return true;
}

// A utility method to apply an operator 'op' on operands 'a'  
// and 'b'. Return the result. 
const applyOp = (op, b, a) => {
   switch (op) {
      case '+':
         return a + b;
      case '-':
         return a - b;
      case '*':
         return a * b;
      case '/':
         if (b == 0)
            throw new Exception("Cannot divide by zero");
         return a / b;
   }
   return 0;
}

//======================================================================================//

// const evaluateExp = (str) => {
//    str = str.replace(/ /g, '');
//    let arr = [...str];
//    let st = [];
//    let st2 = [];
//    for (let i = 0; i < arr.length; i++) {
//       const e = arr[i];
//       if (e === '(') {
//          st.push(i);
//       } else if (e === ')') {
//          let a = [st.pop(), i];
//          st2.push(a);
//       }
//    }

//    if (st2.length) {
//       while (st2.length) {
//          let temp = st2.shift();
//          let start = temp[0], end = temp[1];
//          const exp = evaluateStr(arr.slice(start + 1, end).join(''));
//          console.log(start, end, exp);
//          arr = [];
//          arr.concat(arr.slice(0, start));
//          arr.push(exp);
//          arr.concat(arr.slice(end + 1, arr.length));
//          // arr = [...arr.slice(0, start), exp, ...arr.slice(end + 1, arr.length)];
//       }
//       console.log('arr => ', arr);
//    } else {
//       return evaluateStr(str);
//    }
//    return -4;
// }

// const evaluateStr = (exp) => {

//    // Base Case: Given expression is empty  
//    if (exp.length === 0) return -1;

//    // The first character must be  
//    // an operand, find its value  
//    let res = value(exp.charAt(0));

//    // Traverse the remaining characters in pairs  
//    for (let i = 1; i < exp.length; i += 2) {
//       // The next character must be an operator, and  
//       // next to next an operand  
//       let opr = exp.charAt(i), opd = exp.charAt(i + 1);

//       // If next to next character is not an operand  
//       if (isOperand(opd) == false) return -1;

//       // Update result according to the operator  
//       if (opr == '+') res += value(opd);
//       else if (opr == '-') res -= value(opd);
//       else if (opr == '*') res *= value(opd);
//       else if (opr == '/') res /= value(opd);

//       // If not a valid operator  
//       else return -1;
//    }
//    return res;
// }

// const isOperand = c => c >= '0' && c <= '9';

// const value = c => c - '0';

const str = '- ( 3 + ( 2 - 1 ) )';
console.log(evaluate(str));