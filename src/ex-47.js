/* 사용자에게 숫자를 입력하라고 요청한 다음에 
다른 숫자를 입력하라고 하자.
두 숫자들을 더한 뒤, 
또 다른 숫자들을 더하고 싶은지 묻고
"y" 라고 입력하면 다른 숫자를 입력받아 더하고 다시 같은 질문을 한다.
"y"가 아닌 답을 하면 루프를 종료하고 총합을 출력하라 */

import { question } from 'readline-sync';

const userCnt1 = question('첫번째 숫자 입력 : ');
const userCnt2 = question('두번째 숫자 입력 : ');

let result = Number(userCnt1) + Number(userCnt2);
let yn = 'n';
let plusNumber = 0;

while (true) {
  yn = question('또 다른 숫자를 더하실건가요? y/n ');
  if (yn.toLowerCase() === 'y') {
    plusNumber = question('숫자 입력 하세요 : ');
    result += Number(plusNumber);
    console.log('합 : ' + result);
  } else {
    console.log('합 : ' + result);
    break;
  }
}
