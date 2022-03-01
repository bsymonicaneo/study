/* 사용자에게 숫자를 입력하라고 요청하자. 
만약 10 미만이면 "Too low"라는 메시지를 표시하라.
만약 입력한 숫자가 10에서 20 사이라면 "Correct" 라고 표시하라.
그렇지 않다면 "Too high"라고 표시하라 */

import { question } from 'readline-sync';
const number = question('숫자를 입력하세요');
if (number < 10) {
  console.log('Too low');
}

if (number >= 10 && number <= 20) {
  console.log('Correct');
} else if (number < 10 || (number >= 10 && number <= 20)) {
  console.log('Too high');
}
