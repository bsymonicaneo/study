/* 1과 5 사이의 숫자를 임의로 선택한다
사용자에게 숫자를 선택하라고 요청한다
입력한 값이 맞으면 "Well done" 메시지를 출력하고
그렇지 않으면 선택한 숫자가 너무 높은지 아니면 너무 낮은지 알려주고
다시 숫자를 입력하라고 한다
다시 입력한 숫자가 맞으면 "Correct"라고 출력하고 
그렇지 않으면 "You lose"라고 출력하라 */

import { question } from "readline-sync";

const ranNumber = Math.floor(Math.random() * (5 - 1) + 1);
console.log(ranNumber);

console.log('1 ~ 5 사이의 숫자를 임의 입력 하세요 : ');
const selectNumber = question();

if (ranNumber === Number(selectNumber)) {
  console.log('Well done');
} else if (ranNumber > Number(selectNumber)) {
  console.log('고른 숫자가 임의 숫자보다 너무 낮음');
  console.log('다시 입력하세요 (1~5사이 숫자): ');
  selectNumber = question();
  if (ranNumber === Number(selectNumber)) {
    console.log('Correct');
  } else {
    console.log('You lose');
  }
} else {
  console.log('고른 숫자가 임의 숫자보다 높음');
  console.log('다시 입력해주세요 (1~5사이 숫자) : ');
  selectNumber = question();
  if (ranNumber === Number(selectNumber)) {
    console.log('Correct');
  } else {
    console.log('You lose');
  }
}
