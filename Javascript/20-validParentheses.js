var isValid = function(s) {
    let bracket = {
        "(":")",
        "[":"]",
        "{":"}",
    };
    
     let stack = [];
     
     for (let char of s) {
         if (bracket[char]) {
             stack.push(bracket[char])
         } else {
             if (stack.pop() !== char) return false
         }
     }
     return (!stack.length)
 };

const test1 = '()';
const test2 = '()[]{}';
const test3 = '(]';

console.log(isValid(test1), isValid(test2), isValid(test3));