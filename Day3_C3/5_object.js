// 객체는 여러가지 값이나 복잡한 값을 나타낼 수 있다.
// 객체의 본질은 "컨테이너"이다.
// 내용물이 바뀔 수는 있지만, 컨테이너 자체가 바뀌지는 않는다.
const obj = {};

// 객체의 콘텐츠를 property 혹은 member 라고 부른다.
// 프로퍼티는 key + value 로 구성된다.
// key 는 반드시 문자열 또는 symbol 이어야 하지만, 값은 상관없다.
obj.color = "yellow";

obj["not an identifier"] = 3;
obj["not an identifier"];  // 3
obj["color"];  // "yellow"

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE];  // 8

// 객체를 만드는 동시에 프로퍼티 생성하기
const sam1 = {
    name: 'Sam',
    age: 4,
};

const sam2 = { name: 'Sam', age: 4 };

const sam3 = {
    name: 'Sam',
    classification: {  // 프로퍼티도 객체가 될 수 있다.
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    },
};

console.log(sam3.classification.family);
console.log(sam3["classification"].family);
console.log(sam3.classification["family"]);
console.log(sam3["classification"]["family"]);

// 객체에 함수를 담을 수도 있다.
sam3.speak = function() { return "Meow!"; };
console.log(sam3.speak());

// 프로퍼티를 삭제할 때는 delete 연산자를 사용한다.
delete sam3.classification;
delete sam3.speak;

// Number, String, Boolean
// 이 객체들은 1. 특별한 값을 저장하기 위해 2. 함수 형태로 기능을 제공하기 위해 사용한다.
const s = "hello";
s.toUpperCase();
console.log(s.toUpperCase()); 
// 함수 프로퍼티가 동작하는 것처럼 보이지만, 일시적인 String 객체에 함수가 들어있는 것
// 한 번 사용하면 임시 객체는 즉시 파괴된다.
s.rating = 3;
console.log(s.rating);  // undefined
