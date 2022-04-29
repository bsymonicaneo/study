/* 사용자의 이름을 입력하라고 요청한 뒤, 
그 이름에 모음이 몇 개인지 출력하라 // 정규식 사용 필요 */

import { question } from "readline-sync";

let username = question('이름을 영어로 입력하세요 : ');
let count = 0; // 대신 변경이 되므로 let 사용
username = username.toLowerCase(); // 소문자로 abcde

for (const oneLetter of username) {
  console.log(oneLetter);
  if (
    oneLetter === 'a' ||
    oneLetter === 'e' ||
    oneLetter === 'i' ||
    oneLetter === 'o' ||
    oneLetter === 'u'
  ) {
    count += 1;
  }
}

console.log(count);
