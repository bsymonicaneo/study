/* 다섯재의 색상을 표시하고 그들 중 하나를 사용자에게 선택하라고 요청한다
만약 프로그램이 선택한 것과 동일하다면 "well done" 이라고 출력
프로그램이 선택한 것과 같지 않다면 컴퓨터가 선택한 색상이 포함된 위트있는 무장으로 출력
다시 맞혀보라고 사용자에게 색상을 입력하라고 한다
사용자가 맞출때까지 이 작업을 반복한다 */

import { question } from 'readline-sync';

const color = ['red', 'yellow', 'green', 'blue', 'pink'];
console.log(color);
const randomNumber = Math.floor(Math.random() * 5);
const randomColor = color[randomNumber];
console.log(color[randomNumber]);
const answers = [
    'I bet you are RED with envy',
    'You are probably feeling YELLOW right now',
    'I bet you are green with envy',
    'You are probably feeling blue right now',
    'You are probably feeling pink right now',
];

let stat = true;
while (stat) {
    const userColor = question ('목록에 있는 색상을 선택하세요 : ');
    if (userColor === randomColor) {
        console.log('Well done');
        stat = false;
    } else {
        console.log(answers[randomNumber]);
    }
}
