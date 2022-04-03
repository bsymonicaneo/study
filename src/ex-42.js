/* total 이라는 이름의 변수에 0을 설정하고
숫자를 입력하라는 요청을 5번 반복한다.
숫자를 입력할 때마다 입력한 값을 total에 더할 것인지 묻는다.
더하길 원한다는 답을 하면 total에 그 값을 더하고 
더하길 원치 않으면 더하지 않는다.
다섯개의 숫자가 모두 입력되면 total에 출력하라 */

import { question, questionInt } from 'readline-sync';

let total = 0;

for (let i = 0; i <= 4; i++) {
  const number = questionInt('숫자를 입력하세요 : ');
  const answer = question('숫자를 total에 더 할건가요? (y/n) : ');

  if (answer === 'y') {
    total += number;
  }
}

console.log(total);
