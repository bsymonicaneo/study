/* 사용자로부터 숫자 두개를 입력 받는다.
몫 연산을 사용하여 첫 번째 숫자를 두 번째 숫자로 나누고
나머지도 계산하여 사용자가 읽을 수 있는 문장으로 결과를 출력하라.
예를 들어, 7과 2를 입력했다면 "7 divided by 2 is 3 with 1 remaining" 이라고 출력하자. */

import { question } from 'readline-sync';
const fnumber1 = question('첫 번째 숫자를 입력 하세요.');
const fnumber2 = question('두번째 숫자를 입력해주세요.');

const fnumber3 = Math.floor(fnumber1 / fnumber2);
const fnumber4 = Math.floor(fnumber1 % fnumber2);

console.log(`${fnumber1} divided by ${fnumber2} is ${fnumber3} with ${fnumber4} remaining`);
