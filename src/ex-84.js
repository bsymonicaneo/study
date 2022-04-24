/* 사용자에게 영어 단어를 입력하라고 요청한다
처음 두개의 문자만 대문자로 출력하라 */

import { question } from "readline-sync";

const usereng = question('영어 단어를 입력하세요 : ');

console.log(
  usereng.charAt(0).toUpperCase() +
    usereng.charAt(1).toUpperCase() +
    usereng.slice(2)
);
