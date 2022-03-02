/* 사용자에게 원의 반지름 (원의 중심점으로부터 끝까지의 길이)을 입력하도록 요청한다.
원의 넓이(파이 * 반지름의 이승)를 계산하여 출력하라. */

import { question } from 'readline-sync';
const fone = question('원의 중심점으로부터 끝까지의 길이를 입력하세요.');
const fone2 = Math.PI * (fone ** 2);
console.log(fone2);
