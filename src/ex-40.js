/* 50 미만의 숫자를 입력하도록 요청한다.
50부터 입력한 숫자까지 카운트 다운하면서 숫자를 출력하되,
입력한 숫자까지 출력되로록 하라. */

import { question } from 'readline-sync';
const userNumber = question('50 미만 숫자를 입력하세요 : ');

if (userNumber < 50) {
  for (let i = 50; i >= userNumber; i--) {
    console.log('Count Down...' + i);
  }
}
