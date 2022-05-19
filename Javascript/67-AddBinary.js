
let addBinary = (a, b) => (parseInt(a, 2) + parseInt(b, 2)).toString(2);

let addBinaryManual = (A, B) => {
    let sum = '';
    let carry = 0;
    let i = A.length - 1;
    let j = B.length - 1;

    while (i >= 0 || j >= 0) {
        let a = A[i] ? A[i] : '0';
        let b = B[j] ? B[j] : '0';
        sum = String(a ^ b ^ carry) + sum;
        if (a === b && a !== String(carry)) {
            carry = Number(!carry);
        }
        i--; 
        j--;
    }
    if (carry) {
        sum = String(carry) + sum
    }
    return sum;
}

console.log(addBinary('11111', '1'), addBinaryManual('11111', '1'))


/*
XOR (^) - same 0, different: 1;

a   |   b   | carry | = | sum | carry |
=======================================
0   |   0   |   0   | = |   0 |   0   | 
0   |   0   |   1   | = |   1 |   0   | <---flip carry
1   |   0   |   0   | = |   1 |   0   |
1   |   0   |   1   | = |   1 |   0   |
1   |   1   |   0   | = |   0 |   1   | <---flip carry
1   |   1   |   1   | = |   1 |   1   |
---------------------------------------
https://www.youtube.com/watch?v=6axItxXHouA 
*/
