/* 사용자에게 숫자를 입력하라고 요청한다.
10에서 20사이의 숫자를 입력한다면 배열에 저장한다.
다른 값이라면 'Outside the range'라는 메시지를 출력한다
다섯 개의 숫자가 입력되었다면 'Thank you' 메시지를 출력하고
배열의 항목을 한 줄에 하나씩 출력하라 */

import { question } from "readline-sync";

let i = 0;
const rightNumber = [];

while (i <= 5) {
  for (let j = 0; j <= 5; j++) {
    const userNumber = question('숫자를 입력하세요 : ');
    if (userNumber >= 10 && userNumber <= 20) {
      rightNumber[i] = userNumber;
      break;
    } else {
      console.log('Outside the range');
    }
  }

  i++;
}

console.log('Thank you');
rightNumber.forEach((number) => console.log(number)); 
