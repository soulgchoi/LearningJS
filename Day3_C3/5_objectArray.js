// 배열
// 1. 배열 크기는 고정되지 않는다.
// 2. 요소의 데이터 타입을 가리지 않는다. 통일할 필요도 없다.
// 3. 배열 요소는 0으로 시작한다.

// 숫자로 구성된 배열
const a1 = [1, 2, 3, 4];
// 여러 가지 타입으로 구성된 배열
const a2 = [1, 'two', 3, null];
// 여러 줄로 정의한 배열
const a3 = [
    "What the hammer? What the chain?",
    "In what furnace was thy brain?",
    "What the anvil? What dread grasp",
    "Dare its deadly terrors clasp?",
];
// 객체가 들어있는 배열
const a4 = [
    { name: "Ruby", hardness: 9 },
    { name: "Diamond", hardness: 10 },
    { name: "Topaz", hardness: 8 },
];
// 배열이 들어있는 배열
const a5 = [
    [1, 3, 5], 
    [2, 4, 6],
];

// length 프로퍼티
const arr = ['a', 'b', 'c'];
console.log(arr.length);  // 3

console.log(arr[0]);  // 'a'
console.log(arr[arr.length-1]);  // 'c'