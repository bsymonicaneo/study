/* 사용자에게 1이나 2또는 3을 입력하라고 하자. 만약 1을 입력하면 "Thank you"라는 메시지를 표시하라.
만약 2를 입력하면 "Well done"을 표시하라.
만약 3을 입력하며 "Correct"를 표시하라.
만약 사용자가 다른 것을 입력하면 "Error message"를 표시하라. */

import { question } from 'readline-sync';
const number = question('1 or 2 or 3을 입력하세요');
switch (number) {
    case '1':
        console.log('Thank you');
        break;
    case '2':
        console.log('Well done');
        break;
    case '3':
        console.log('Correct');
        break;
    default:
        console.log('Error message');
        break; 
}
