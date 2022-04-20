/* 시 한 구절을 사용자에게 표시하고 
시작 인덱스와 마지막 인덱스를 입력하도록 요청한다.
입력한 두 값 사이의 문자를 출력하라 */

import { question } from "readline-sync";

const poem = 'The stars are touched by the wind even tonight.';
console.log(poem);
console.log(poem.length);

const fistnum = question('시작 인덱스 번호를 입력 하세요 : ');
const lastnum = question('마지막 인덱스 번호를 입력하세요 : ');

let result = poem.substring(fistnum,lastnum);
console.log(result);
