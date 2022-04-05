/* 임의로 생성된 두 개의 정수를 더하는 다섯 개의 질문이 나오는 수학 퀴즈를 만들자
사용자가 답을 입력하라고 요청하고 정답을 맞히면 점수를 증기하라.
퀴즈가 끝나면 다섯 문제 중에 몇 개를 맞혔는지 출력하라 */

import { question } from 'readline-sync';

const ranNumber = Math.floor(Math.random() * (10 - 1) + 1);
console.log(ranNumber);

while (true) {
  console.log('1 ~ 10 숫자 입력하세요');
  let select = question();
  if (ranNumber === Number(select)) {
    console.log('맞췄습니다.');
    break;
  } else {
    console.log('못 맞췄습니다. ');
  }
}

// 퀴즈가 끝나면 몇 개를 맞혔는지 출력하라는거 어려움

