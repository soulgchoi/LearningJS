// 문자열 병합
console.log(3 + 5 + "8");  // "88"
console.log("3" + 5 + 8);  // "358"


// 논리 연산자
// 거짓 같은 값
/* 
    undefined
    null
    false
    0
    NaN
    ''
*/
// 이외에는 모두 참 같은 값이다.
/* 
    valueOf() > false 값을 반환하는 객체
    []  // arr = [] 일 때, arr.length 는 0을 반환하므로 false 이다.
    " "
    "false"
*/

// and = &&
// or = ||
// not = !

// 단축 평가
const skipIt = true;
let x = 0;
const result = skipIt || x++;
console.log(result);
console.log(x);  // x 는 거짓 같은 값이라 평가되지 않으므로 ++ 연산하지 않는다.

const doIt = false;
let y = 0;
const result2 = doIt && y++;
console.log(result2);  // false
console.log(y);  // 0

// 피연산자가 불리언이 아닐 때
let suppliedOptions = {};
const options = suppliedOptions || { name: "Default"}
console.log(options);  // 객체는 항상 참 같은 값
// suppliedOptions 가 참 같은 값이면 suppliedOptions 를, 아니면 name ~~ 를 반환한다.