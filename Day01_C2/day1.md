#### 자바스크립트 개발 도구 설치
$ npm init  > 프로젝트 시작
$ npm install --save underscore
$ npm install -g gulp  > 빌드 도구
> gulp 는 전역으로 한 번 설치한 뒤, 프로젝트마다 로컬 걸프를 설치한다.
> $ npm install --save-dev gulp, 그리고 gulpfile 작성

트랜스컴파일러
- 바벨 *
- 트레이서

걸프와 바벨을 설치하면, ES6 코드를 ES5 코드로 바꿀 수 있다.
(public/es6 > public/dist 로 저장)
$ npm i --save-dev gulp-babel
$ npm i --save-dev babel-preset-es2015
$ npm i --save-dev @babel/core

$ gulp babel 로 실행