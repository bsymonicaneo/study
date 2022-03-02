/* 027번 프로그램을 업데이트하여 소수점 둘째 자리까지 출력하라. */

import { question } from 'readline-sync';
const number = question('소수점 이하 자릿수가 많은 숫자를 입력하세요.');
const number2 = number * 2;
console.log(number2.toFixed(2));
