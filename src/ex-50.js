/* 사용자에게 10과 20 사이의 숫자를 입력하라고 요청한다
입력한 숫자가 10 이하이면 "Too low"라는 메시지를 출력하고 다시 입력하라고 요청한다.
만약 20 이상이면 "Too high"라는 메시지를 출력하고 다시 입력하라고 요청한다.
사용자가 10과 20 사이의 값을 입력할 때까지 이 과정을 반복하고, 
10과 20 사이의 값을 입력하면 "Thank you" 라는 메시지를 출력하라 */

import { question } from 'readline-sync';

let userNum = 0; // 초기값 바깥에서 세팅

while (userNum <= 10 || userNum >= 20) {
  userNum = question('10과 20 사이의 숫자를 입력하세요 : ');

  if (userNum <= 10) {
    console.log('Too low');
  } else if (userNum >= 20) {
    console.log('Too High');
  } else {
    console.log('Thank you');
  }
}
