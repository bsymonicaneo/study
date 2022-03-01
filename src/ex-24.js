/* 사용자에게 아무 단어나 입력하라고 하고 그것을 대문자로 출력하라 */

import { question } from 'readline-sync';
const fworld = question('아무 단어나 입력하세요');
console.log(fworld.toUpperCase());
