/* 단어를 입력하라고 요청한 뒤, 그 단어의 문자를 한 줄에 하나씩 거꾸로 출력하라
예를 들어, 'hello'라고 입력했다면 다음과 같이 출력되어야 한다. 
Enter a word: Hello
o
l
l
e
H
*/

import { question } from "readline-sync";

let userEnter = question('단어를 입력하세요 : ');
let userDae = userEnter.charAt(0).toUpperCase() + userEnter.slice(1); // 입력 단어 첫 글자 대문자 변환
let userempty = [userDae]; // 입력 단어 배열 변환
let result = userDae.split(""); // 입력 단어 한자씩 나누기
let reEnter = result.reverse(); // 입력 단어 변환한거 뒤집기

console.log('Enter a word: ' + userDae);
reEnter.forEach(value => {
  console.log(value);
});
