// 조건 하나로 여러 가지 중 하나르 선택할 수 있다.
// 값으로 평가할 수 있는 표현식이다.

/*
switch (expression) {
    case value1:
        // expression 을 평가한 결과가 value1 일 때 실행
    case value2:
        // expression 을 평가한 결과가 value2 일 때 실행
        [break;]
        ...
    case valueN:
        // expression 을 평가한 결과가 valueN 일 때 실행
        [break;]
    default:
        // expression 에 맞는 것이 없을 때 실행
        [break;]
} */

switch (totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 11:
        totalBet = 0;
        break;
    case 13:
        totalBet = 0;
        break;
    case 21:
        totalBet = 21;
        break;
}

switch (totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 11:
    case 13:
        totalBet = 0;
        break
    case 21:
        totalBet = 21;
        break;
}

switch (totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 13:
        funds = funds - 1;
    case 11:
        totalBet = 0;
        break;
    case 21:
        totalBet = 21;
        break;
}

switch (totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 13:
        funds = funds - 1;
    case 11:
        totalBet = 0;
        break;
    case 21:
        totalBet = 21;
        break;
    default:
        console.log("No superstition here!");
        break;
}

function adjustBet (totalBet, funds) {
    switch (totalBet) {
        case 7:
            return funds;
        case 13:
            return 0;
        default:
            return totalBet;
    }
}