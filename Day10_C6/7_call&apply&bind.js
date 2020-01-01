// call 메서드는 모든 함수에서 사용 가능하며, this 를 특정 값으로 지정할 수 있다.

const bruce = { name: "Bruce"};
const madeline = { name: "Madeline" };

// 이 함수는 어떤 객체에도 연결되지 않았지만 this 를 사용한다.
function greet() {
    return `Hello, I'm ${this.name}`;
}

console.log(greet());  // Hello, I'm undefined
console.log(greet.call(bruce));  // Hello, I'm Bruce
console.log(greet.call(madeline));  // Hello, I'm Madeline

// call 을 사용해 this 로 객체를 넘기면
// 해당 함수가 주어진 객체의 메서드인 것처럼 사용할 수 있다.

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
update.call(bruce, 1949, 'singer');
    // bruce 는 이제 { name: "Bruce", birthYear: 1949, occupation: "singer" } 이다.
update.call(madeline, 1942, 'actress');
    // madeline 은 이제 { name: "Madeline", birthYear: 1942, occupation: "actress" } 이다.

// apply 는 call 과 거의 같지만, 매개변수를 배열로 받는다.
// (call 은 매개변수를 직접 받음)
update.apply(bruce, [1955, "actor"]);
    // bruce 는 이제 { name: "Bruce", birthYear: 1955, occupation: "actor" } 이다.
update.apply(madeline, [1918, "writer"]);
    // madeline 은 이제 { name: "Madeline", birthYear: 1918, occupation: "writer" } 이다.

// apply 는 배열 요소를 매개변수로 사용할 때 쓰인다.
const arr = [2, 3, -5, 15, 7];
console.log(Math.min.apply(this, arr));  // -5
console.log(Math.max.apply(null, arr));  // 15
// this 를 쓰건 null 을 쓰건 Math.min 과 Math.max 는 this 와 관계없이 동작한다.

// this 가 상관없을 때, apply 대신 확산연산자를 사용할 수 있다.
// update 함수는 this 가 중요하므로 call 을 쓰고, Math.min 은 확산 연산자를 사용할 수 있다.
const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);  // == apply(bruce, newBruce)
Math.min(...arr);  // -5
Math.max(...max);  // 15

// bind
// bind 를 사용하면 this 의 값을 영구히 바꿀 수 있다.
// update 메서드를 호출할 때 this 값이 항상 bruce 가 되게 하고싶을 때 사용한다.
const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
    // bruce 는 이제 { name: "Bruce", birthYear: 1904, occupation: "actor" } 이다.
updateBruce.call(madeline, 1274, "king");
    // madeline 은 변하지 않는다.
    // bind 를 사용하여 this 는 항상 bruce 이므로,
    // bruce 가 { name: "Bruce", birthYear: 1274, occupation: "king" } 이 된다.

// bind 는 항상 그 매개변수를 받으면서 호출되는 새 함수를 만드는 효과가 있다.
const updateBruce1949 = update.bind(bruce, 1949);  // bruce 의 birthYear 를 1949 로 고정하고,
updateBruce1949("singer, songwriter");
    // occupation 만 변경할 수 있다.
    // bruce 는 { name: "Bruce", birthYear: 1949, occupation: "singer, songwriter" } 이다.