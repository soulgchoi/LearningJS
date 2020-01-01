// 객체의 프로퍼티인 함수를 메서드method 라고 한다.
const o = {
    name: 'Wallace',  // primitive 프로퍼티
    bark: function() { return 'Woof!';},  // method (함수 프로퍼티)
}

const o2 = {
    name: 'Wallace',
    bark() {return 'Woof!';},
}


// this 키워드
const o3 = {
    name: 'Wallace',
    speak() {return `My name is ${this.name}!`;},
}
console.log(o3.speak());

/*
const o4 = {
    name: 'Julie',
    greetBackwards: function() {
        function getReverseName() {
            let nameBackwards = '';
            for(let i=this.name.length-1; i>=0; i--) {  // this 가 o4 가 아닌 다른 곳에 묶여 동작하지 않음
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
console.log(o4.greetBackwards());
*/

const o5 = {
    name: 'Julie',
    greetBackwards: function() {
        const self = this;  // 다른 변수에 this 할당
        function getReverseName() {
            let nameBackwards = '';
            for(let i=self.name.length-1; i>=0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
console.log(o5.greetBackwards());  // eiluJ si eman ym ,olleH