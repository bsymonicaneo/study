import { question } from "readline-sync";

const compnum = 50;
let inputNumber = 0;

while (compnum === Number(inputNumber)) {
    inputNumber = question('숫자를 입력하세요 : ');

    if (inputNumber > compnum) {
        console.log('입력값이 큼');
    } else if (inputNumber < compnum) {
        console.log('입력값이 작음');
    } else {
        console.log('Well done, you took ' + inputNumber + ' attempts');
    }
}
