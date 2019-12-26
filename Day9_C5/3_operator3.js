// 조건 연산자
const doIt = false;
const result = doIt ? "Did it!" : "Didn't do it";
console.log(result);  // Didn't do it
// doIt = true 이면 Did it

// 쉼표 연산자
// 표현식을 결합하여 두 번째 표현식의 결과를 반환한다.
let x = 0, y = 10, z;
z = (x++, y++);
console.log(z);  // 10 === y++ 가 반환하는 값
// z = x++, y++;  >  z = 0
console.log(x, y);  // 1, 11

