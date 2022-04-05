/* 1과 10 사이의 정수를 임의로 선택한다.
사용자에게 숫자를 입력하라고 요청하고 
임의로 선택한 숫자를 입력할 때까지 계속 숫자를 입력하게 하라 */

import { question } from "readline-sync";

const ranNumber = Math.floor(Math.random() * (10 - 1) + 1);
console.log(ranNumber); // 1~10 사이 정수 임의 선택 완료

let stat = true;

while (stat) {
  const select = question('1~10 숫자 입력하세요 : ');
  if (ranNumber === Number(select)) {
    console.log('right end.');
    stat = false;
  } else {
    console.log('wrong.');
  }
}
