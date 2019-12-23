// for of
// 각 요소의 인덱스가 필요할 때는 그냥 for 루프를 쓰는 게 맞다.

const hand = [randFace(), randFace(), randFace()];
for (let face of hand)
    console.log (`You rolled... ${face}!`)

const hand = [randFace(), randFace(), randFace()];
for (let i=0; i<hand.length; i++)
    console.log(`Roll ${i+1}: ${hand[i]}`);