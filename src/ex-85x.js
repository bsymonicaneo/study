/* 사용자의 이름을 입력하라고 요청한 뒤, 
그 이름에 모음이 몇 개인지 출력하라 */

import { question } from "readline-sync";

const username = question('이름을 영어로 입력하세요 : ');
count = 0;
username = username.toLowerCase();

for (x == username) {
    if x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u';
    count = count + 1 
}
console.log(count);
