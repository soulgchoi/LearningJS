// 문자열을 숫자로 바꾸기

// 1. Number 객체 생성자 사용
const numStr = "33.3";
const num = Number(numStr);
console.log(num);
console.log(typeof(num));

// 2. 내장함수 parseInt & parseFloat 사용
const a = parseInt("16 volts", 10);  // 10진수 16
const b = parseInt("3a", 16);  // 16진수 3a 를 10진수로
const c = parseFloat("15.5 kph");  // 디폴트 기수는 10
console.log(a, b, c);

// date to number
const d = new Date();
const ts = d.valueOf();
console.log(ts);

// 불리언으로 변환
const n = 0;
const b1 = !!n;
const b2 = Boolean(n);
console.log(n, b1, b2);