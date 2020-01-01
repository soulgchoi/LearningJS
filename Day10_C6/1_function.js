function getGreeting() {
    return "Hello, World!";
}
console.log(getGreeting());

// 함수를 다른 변수에 할당할 수 있다.
const f = getGreeting;
console.log(f());
// 객체 프로퍼티에 할당할 수 있다.
const o = {};
o.f = getGreeting;
console.log(o.f());
// 배열 요소로 할당할 수도 있다.
const arr = [1, 2, 3];
arr[1] = getGreeting;
console.log(arr);  // [ 1, [Function: getGreeting], 3 ]
console.log(arr[1]());