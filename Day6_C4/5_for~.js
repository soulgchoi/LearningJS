// for in 루프
// 객체의 프로퍼티에 루프 실행
for (variable in object)
    statement

const player = {
    name: 'Thomas',
    rank: 'Midshipman',
    age: 25,
};
for (let prop in player) {
    if (!player.hasOwnProperty(prop)) continue;
    console.log(prop + ': ' + player[prop]);
}

// for of 루프
// 컬렉션의 요소에 루프를 실행하는 방법
// iterable 객체에 모두 사용할 수 있음
for (variable of object)
    statement

// 배열로 사용한 예제
const hand = [randFace(), randFace(), randFace()];
for (let face of hand)
    console.log(`You rolled...${face}!`);