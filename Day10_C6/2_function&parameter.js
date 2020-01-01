// 함수에 인자argument 를 전달해서 매개변수parameter 를 사용할 수 있다.
function avg(a, b) {
    return (a + b)/2;
}
console.log(avg(5, 10));  // 7.5

// 매개변수는 함수 안에서만 존재한다.
const a = 5, b = 10;
console.log(avg(a, b));  // 매개변수는 변수의 '값'을 전달받는다.

// 변수와 함수 안의 매개변수
function f(x) {
    console.log(`f 내부: x=${x}`);
    x = 5;
    console.log(`f 내부: x=${x} (할당 후)`);
}
let x = 3;
console.log(`f를 호출하기 전: x=${x}`);
f(x);
console.log(`f를 호출한 다음: x=${x}`);
/* f를 호출하기 전: x=3
f 내부: x=3
f 내부: x=5 (할당 후)
f를 호출한 다음: x=3 */

// 함수 안에서 객체 자체를 변경하면 밖에서도 적용된다.
function f2(o) {
    o.message = `f2 안에서 수정함 (이전 값: '${o.message}')`;
}
let o = {
    message: "초기 값"
};
console.log(`f2를 호출하기 전: o.message='${o.message}'`);
f2(o);
console.log(`f2를 호출한 다음: o.message='${o.message}'`);
/* f를 호출하기 전: o.message=초기 값
f를 호출한 다음: o.message=f 안에서 수정함 (이전 값: '초기 값) */

function f3(o2) {
    o2.message = "f에서 수정함";
    o2 = {
        message: "새로운 객체!"
    };  //  함수 내부에서 할당한 객체는 외부에서 불러올 수 없다.
    console.log(`f3 내부: o2.message='${o2.message}' (할당 후)`);
}
let o2 = {
    message: "초기 값"
};
console.log(`f3를 호출하기 전: o2.message='${o2.message}'`);
f3(o2);
console.log(`f3를 호출한 다음: o2.message='${o2.message}'`);
/* f3를 호출하기 전: o2.message='초기 값'
f3 내부: o2.message='새로운 객체!' (할당 후)
f3를 호출한 다음: o2.message='f에서 수정함' */