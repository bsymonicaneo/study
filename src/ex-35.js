/* 035 ~ 044 for 루프 
사용자의 이름을 입력하라고 요청한 뒤, 그 이름을 세 번 출력하라 */

import { question } from 'readline-sync';
const userName = question('이름을 입력하세요 : ');

for (let i = 0; i < 3; i++) {
    console.log(i);
    console.log(userName);
}
