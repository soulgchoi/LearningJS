// 피보나치 수열
for (let temp, i=0, j=1; j<30; temp=i, i=j, j=i+temp)
    console.log(j);

for(;;) console.log("I will repeat forever!");  // 무한루프

let s = '3';  // 숫자가 들어있는 문자열
for (; s.length<10; s=' '+s);  // 문자열 길이를 조건으로, ; 없으면 에러
    console.log(s)

for (let x=0.2; x<3.0; x+=0.2)  // 제어 변수가 정수가 아니어도 됨
    console.log(x);

for (; !player.isBroke;)  // 조건에 객체 프로퍼티를 쓸 수 있음
    console.log("Still Playing!");

/* for 루프는 while 루프로 고쳐쓸 수 있다.
for([initialization]; [condition]; [final-expression])
    statement

[initialization]
while ([condition]) {
    statement
    [final-expression]
} */