// 제어문
/* 예제 - 크라운 앤 앵커 게임
    50 펜스로 시작
    > 100 펜스를 따거나 50 펜스를 전부 잃었습니다.
    Y > 끝
    N > 돈을 겁니다.
        > 주사위를 굴립니다.
        > 그림을 맞추면 돈을 가져옵니다.
*/

let funds = 50;
// while 루프
while (funds > 1 && funds < 100) {
    // 블록 문 안에
    funds = funds + 2;
    funds = funds - 1;
}

/* 꼭 블록을 쓰지 않아도 될 때도 있다.
while (funds > 1 && funds < 100)
    funds = funds + 2;
*/

// 보조 함수
// m 이상 n 이하의 무작위 정수 반환
function rand(m, n) {
    return m + Math.floor((n - m + 1)*Math.random());
}

// 크라운 앤 앵커 게임의 여섯 가지 도형 중 하나 무작위 반환
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond",]
        [rand(0, 5)];
}

// if else 문
const bets = {
    crown: 0,
    anchor: 0,
    heart: 0,
    spade: 0,
    club: 0,
    diamond: 0,
};
let totalBet = rand(1, funds);
if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
} else {
    // 판에 걸 돈 분배
}
funds = funds - totalBet;

// do while 루프
let remaining = totalBet;
do {
    let bet = rand(1, remaining);
    let face = randFace();
    bets[face] = bets[face] + bet;
    remaining = remaining - bet;
} while (remaining > 0);

// for 루프
const hand = [];
for (let roll=0; roll<3; roll++) {
    hand.push(randFace());
}

// if 문
let winnings = 0;
for (let die=0; die<hand.length; die++) {
    let face = hand[die];
    if (bets[face]>0) winnings = winnings + bets[face];
}
funds = funds + winnings;