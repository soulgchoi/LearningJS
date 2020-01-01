// 제어문 패턴들

// continue 문
// 특정 조건이 맞을 때만 루프 바디 실행
// == 반복문 안에 조건문을 쓸 때
// 제어문 중첩 nested control flow
while (funds>1 && funds<100) {
    let totalBat = rand(1, funds);
    if (totalBat === 13) {
        console.log("Unlucky! Skip this round ....");
    } else {
        // 플레이
    }
}
// continue 문으로 다음처럼 바꿀 수 있다.
while (funds>1 && funds<100) {
    let totalBat = rand(1, funds);
    if (totalBat === 13) {
        console.log("Unlucky! Skip this round ....");
        continue;
    }
    // 플레이
}

// break 또는 return 문
// 불필요한 연산을 줄인다.
let firstPrime = null;
for (let n of bigArrayOfNumbers) {
    if (isPrime(n) && firstPrime === null) firstPrime = n;
}
// bigArrayOfNumbers 가 아주 클 수도 있기 때문에,
let firstPrime = null;
for (let n of bigArrayOfNumbers) {
    if (isPrime(n)) {
        firstPrime = n;
        break;  // break 문으로 빠져나온다.
    }
}

// for 루프가 끝나도 인덱스 변수 값은 그대로 유지되므로,
let i = 0;
for (; i<bigArrayOfNumbers.length; i++) {
    if (isPrime(bigArrayOfNumbers[i])) break;
}
if (i === bigArrayOfNumbers.length) console.log('No prime numbers!');
else console.log(`First prime number found at position ${i}`)

// 감소하는 인덱스를 써서 무한루프를 방지하기
// 이렇게 쓰면 일부는 제거하지 않고 넘어갈 수 있으므로
for (let i=0; i<bigArrayOfNumbers.length; i++) {
    if (isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}
// 이렇게 쓴다.
for (let i=bigArrayOfNumbers.length-1; i>=0; i--) {
    if (isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}