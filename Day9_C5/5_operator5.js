// 할당 연산자
let v, v0;
v = v0 = 9.8;  // v0 가 먼저 9.8 이 되고, 그 다음 v 가 9.8 이 된다.

// n 이 nums[i] 의 값을 받고,
// 다음에 표현식 전체가 그 값으로 표현되므로 숫자로 비교할 수 있다.
const nums = [3, 5, 15, 7, 5];
let n, i = 0;
while ((n=nums[i]) < 10 && i++ < nums.length) {
    console.log(`Number less than 10: ${n}.`);
}
console.log(i);
console.log(`Number greater than 10 found: ${n}.`);
console.log(`${nums.length - i - 1} numbers remain.`);
/*
    Number less than 10: 3.
    Number less than 10: 5.
    2
    Number greater than 10 found: 15.
    2 numbers remain.
*/

console.log("--");
// 해체 할당
// 객체나 배열을 변수로 해체한다.
// 객체 해체
const obj = { b: 2, c: 3, d: 4,};
const { a, b, c } = obj;
console.log(a);  // undefined
console.log(b);  // 2
console.log(c);  // 3
// console.log(d);  // ReferenceError

console.log("--");
const obj2 = { b2: 2, c2: 3, d2: 4,};
let a2, b2, c2;
// { a2, b2, c2 } = obj2;  // 에러
({ a2, b2, c2 } = obj2); 

// 배열 해체
const arr = [1, 2, 3];
let [x, y] = arr;
console.log(x);  // 1
console.log(y);  // 2
// console.log(z);  // ReferenceError
// 확산 연산자
const arr2 = [1, 2, 3, 4, 5];
let [x2, y2, ...rest] = arr2;
console.log(x2);  // 1
console.log(y2);  // 2
console.log(rest);  // [ 3, 4, 5 ]