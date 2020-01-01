// 익명 함수는 함수 식별자가 주어지지 않는다.
// function = 로 쓰지 않고, 
// 변수에 함수라는 값을 바로 할당한다.
const f = function() {
    // 함수 표현식으로 함수를 만들고, f 라는 변수에 할당한다.
}

const g = function f() {
    // ...
}
// 함수 바깥에서 접근할 때는 g를 써야하지만, f로 접근할 수 없다.
// 이런 방식은 재귀함수에서 쓴다.
const g2 = function f2(stop) {
    if (stop) console.log('f stopped');
    f2(true);  // 안에서는 f 를 써서 자기자신 호출
};
g2(false); // 밖에서는 g
