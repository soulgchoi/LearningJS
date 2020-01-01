// 화살표 표기법
// function 을 생략할 수 있다.
// 매개변수가 하나라면, () 를 생략할 수 있다.
// 함수 바디가 표현식 하나라면, 중괄호와 return 을 생략할 수 있다.
// 화살표 함수는 항상 익명이다.
// 변수에 할당할 수는 있지만, 이름 붙은 함수를 만들 수는 없다.
// 메서드에는 사용하지 않는다. (스코프 문제)

const f1 = function() { return "hello!"; }
const a1 = () => "hello!";

const f2 = function(name) { return `Hello, ${name}!`; }
const a2 = name => `Hello, ${name}!`

const f3 = function(a, b) { return a + b; }
const a3 = (a, b) => a + b;

// 일반적인 함수와 다르게, this 가 정적으로 묶인다.
// 앞서 일반 함수에서는 다음과 같이 this.name 을 사용할 수 없었지만,
// 화살표 함수를 썼을 때는 가능하다. 
const o = {
    name: 'Julie',
    greetBackwards: function() {
        const getReverseName = () => {
            let nameBackwards = '';
            for(let i=this.name.length-1; i>=0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
console.log(o.greetBackwards());