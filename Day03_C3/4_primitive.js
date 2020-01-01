// 문자열

// 이스케이프
// 문자열 안에 따옴표를 써야할 때
const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in.';
const imperative = "Don't do that!"
// '' 와 "" 를 다 써야할 때
const dialog = "Sam looked up and said "don't do that!" to Max.";  // 에러
// 역슬래시(\)를 써서 표현
const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t to that!" to Max.';
const s = "In JavaScript, use \\ as an escape character in strings.";

// 템플릿 문자열
// 문자열 병합concatenation
let currentTemp = 19.5;
const message = "The current temperature is" + currentTemp + "\u00b0C";
// 문자열 템플릿template  >  `${}` 로 표현
let currentTemp = 19.5;
const message = `The current temprature is ${currentTemp}\u00b0C`;

// 여러 줄 문자열
const multiline = "line1\
line2";
const multiline = "line1\n\
line2";
const multiline = `line1
line2`;
const multiline = `line1
    line2
    line3`;
// 권장 방법
const multiline = "line1\n" +
    "line2\n" +
    "line3";
// '', "", `` 을 섞어서 쓸 수도 있다.
const multiline = 'Current temperature:\n' +
    `\t${currentTemp}\u00b0C\n` +
    "Don't worry...the heat is on!";

// 숫자와 문자열
const result1 = 3 + '30';  // '330'
const rusult2 = 3 * '30';  // 90

// 불리언
let heating = true;
let cooling = false;

// 심볼
// 항상 유일한 토큰
// 유일하다는 점에서 객체와 유일하지만, primitive 값의 특징을 모두 가지고 있다.
const RED = Symbol("the color of a sunset!");
const ORANGE = Symbol("the color of sunset!");
RED === ORANGE  // false; 모든 심볼은 서로 다르기 때문이다.

// null 과 undefined
// 둘 다 존재하지 않는 것을 나타낼 때 쓴다.
// null > 프로그래밍에 사용
// undefined > 자바스크립트 자체에서 사용
// 변수에 값을 할당하지 않았을 때 기본적으로 undefined 가 된다.
let currentTemp;  // undefined
const targetTemp = null;  // "아직 모르는" 값
currentTemp = 19.5;
currentTemp = undefined  // X