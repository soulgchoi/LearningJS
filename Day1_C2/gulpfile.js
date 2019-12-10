/*
const gulp = require('gulp');
// 걸프 의존성

gulp.task('default', function() {
    // 걸프 작업
});
*/

// 바벨을 설치한 후 다음과 같이 수정한다.
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
    // 노드 소스
    gulp.src("./es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("./dist"));
    // 브라우저 소스
    gulp.src("./public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("./public/dist"));
});