#### 자바스크립트 개발 도구 설치
--save-dev 는 의존적이므로, 환경이 바뀌면 새로 설치한다.
($ npm i 로 설치가 안됨)
$ npm i --save-dev gulp-babel
$ npm i --save-dev babel-preset-es2015
위의 명령어 대신, $ npm i --save-dev @babel/preset-env 로 설치한다.
$ npm i --save-dev @babel/core

걸프 실행이 되지 않아, gulpfile.js 에
`gulp.task('default', async function() {`
`async` 를 추가했다. 이후 정삭적으로 작동한다.

##### 2.4 린트
$ npm i -g eslint
$ npm i --save-dev gulp-eslint
gulpfile.js 에 eslint 실행 코드를 추가한다.