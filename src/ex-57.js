/* 56번 프로그램을 업데이트하여 사용자가 입력한 숫자가 큰지 작은지를 알려주고 
다시 숫자를 고르게 하라 */

import { question } from 'readline-sync';

const ranNumber = Math.floor(Math.random() * (10 - 1) + 1);
console.log(ranNumber);

let stat = true;

while (stat) {
  const select = question('1~10 숫자 입력하세요 : ');
  if (Number(select) > ranNumber) {
    console.log('big.');
  } else if (Number(select) < ranNumber) {
    console.log('small.');
  } else {
    console.log('right end.');
    stat = false;
  }
}
