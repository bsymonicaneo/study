/* 임의로 생성된 두 개의 정수를 더하는 다섯 개의 질문이 나오는 수학 퀴즈를 만들자
사용자가 답을 입력하라고 요청하고 정답을 맞히면 점수를 증기하라.
퀴즈가 끝나면 다섯 문제 중에 몇 개를 맞혔는지 출력하라 */

import { question } from 'readline-sync';

let userCount = 0;

for (let i = 0; i <= 4; i ++) {
  const ranNumber1 = Math.floor(Math.random() * (10 - 1) + 1);
  const ranNumber2 = Math.floor(Math.random() * (10 - 1) + 1);
  const ranResult = ranNumber1 + ranNumber2;
  console.log(ranResult);
  const userNum = question('답을 입력하세요 : ');

  if (Number(ranResult) === Number(userNum)) {
    userCount++;
    console.log('맞혔습니다');
  } else {
    console.log('틀렸습니다');
    console.log('정답은' + ranResult);
  }
}

console.log('당신이 맞힌 개수는' + userCount);
