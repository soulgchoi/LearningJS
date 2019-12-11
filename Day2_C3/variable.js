// 변수 선언
let currentTempC = 22;
// currentTempC 를 1. 선언(생성)하고 2. 초기값을 할당한다.
// currentTempC 의 값은 언제든 바뀔 수 있다.
currentTempC = 22.5;  // 값을 할당한다. (선언 X)
// 변수는 한 번만 선언할 수 있다. 
let targetTempC;  // let targetTempC = undefined; 와 같다.
// 하나의 let 문에서 여러 개의 변수를 선언할 수 있다.
let targetTempC, room1 = "conference_room_a", room2 = "lobby";

// 상수
// 한 번 할당한 값을 바꿀 수 없다. 여러 개 선언이 가능하다.
const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;