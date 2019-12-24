// 연산자
// 연산자는 값을 만드는 '행동'이다.
var a = 5; 
3 % 2  // 나머지
-a  // 단항부정
+a  // 단항플러스
++a  // 전위증가, x 에 1을 더한 다음 평가
a++  // 후위증가, x 를 평가한 다음 1을 더함
--a  // 전위감소
a--  // 전위증가

// 단항부정과 빼기는 단항부정에 우선순위가 있다.
const x = 5;
const y = 3 - -x;  // y = 8
// 더하기도 마찬가지
const s = "5";
const p = 3 + +s;  // p = 8, 단항플러스를 사용하지 않을 경우 "35"

const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
const p1 = -x1*1
const p2 = +x2*2
const p3 = +x3*3
const p4 = +x4*4;

console.log (p1, p2, p3, p4);