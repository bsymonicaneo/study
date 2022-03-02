/* 원기둥의 반지름과 깊이를 입력하도록 요청한다.
원기둥의 부피 (원 넓이 * 깊이)를 구하고 결과를 반올림하여 소수점 세째 자리까지 출력하라 */

import { question } from 'readline-sync';
const fone = question('원기둥의 반지름을 입력하세요.');
const fone2 = question('원기둥의 깊이를 입력하세요.');

const result = Number(fone) * Number(fone) * Math.PI * fone2; // 원기둥 부피공식 = 반지름 x 반지름 x 3.14 x 높이
console.log('원기둥의 부피는' + result.toFixed(3));
