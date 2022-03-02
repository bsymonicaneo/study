/* 사용자에게 500 이상의 정수를 입력하라고 요청한다.
입력받은 숫자의 제곱근을 구하고 소수점 둘째 자리까지 출력하라. */

import { question } from 'readline-sync';
const fone = question('500 이상의 정수를 입력하세요.');
console.log(Math.sqrt(fone).toFixed(2));
