// 비교 연산자
// 일치(===)와 동등(==) 차이

// 동등 ==
// 두 값이 같은 객체를 가리키거나, 같은 값을 갖도록 변환할 수 있을 때
// "33" 은 33 으로 변환 가능하므로 동등하지만, 일치하지 않는다.

const n = 5;
const s = "5";

console.log(n === s);
console.log(n !== s);
console.log(n === Number(s));
console.log(n !== Number(s));
console.log(n == s);
console.log(n != s);

const a = { name: "an object" };
const b = { name: "an object" };
console.log(a === b);
console.log(a !== b);
console.log(a == b);
console.log(a != b);

console.log('--')
// 관계 연산자
// 문자나 숫자처럼 순서가 있을 때 사용 가능하다.
console.log('a' > 'b');  // false
console.log('a' < 'b');  // true

console.log('--')
// 숫자 비교
// NaN 은 자신을 포함해서 무엇과도 같지 않다.
console.log(NaN === NaN); // false
console.log(NaN == NaN);  // false

console.log('--');
// 자바스크립트의 숫자는 더블 형식 = 근사치이므로,
// 숫자 비교가 예상한 결과와 다를 수 있다.
let num = 0;
while (true) {
    num += 0.1;
    if (num === 0.3) break;
}
console.log(`Stopped at ${num}`);
// 멈추지 않음, 0.1 이 더블 형식으로 정확히 나타낼 수 없는 값이기 떄문이다.

// 관계 연산자를 사용해 정확히 일치하지 않아도 비교할 수 있다.
let num2 = 0;
while (true) {
    num2 += 0.1;
    if (Math.abs(num2 - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${num2}`);  // Stopped at 0.30000000000000004