// console.log('main.js loaded')

$(document).ready(function() {  // 브라우저가 HTML 을 전부 불러왔는지 확인
    'use strict';  // 코드를 더 엄격하게 처리
    // console.log('main.js loaded')

    // canvas, paper.js 사용
    paper.install(window);  // 전역 스코프에 설치
    paper.setup(document.getElementById('mainCanvas'));

    // TODO

    /* 원 그리기
    var c = Shape.Circle(200, 200, 50);
    c.fillColor = 'green'; */

    /* for 문을 사용해 바둑판 모양으로 그리기 
    var c;
    for(var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50) {
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'green';
        }
    } */

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';


    var tool = new Tool();

    tool.onMouseDown = function(event) {
        // var c = Shape.Circle(event.point.x, event.point.y, 20);
        var c = Shape.Circle(event.point, 20);
        console.log(event.point);
        c.fillColor = 'green';
    }
    

    paper.view.draw();
})