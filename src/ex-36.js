/* 035번 프로그램을 수정하여 사용자가 이름과 숫자를 입력하게 하여 이름을 입력한 숫자만큼 출력하라 */

import { question } from 'readline-sync';
const userName = question('이름을 입력하세요 : ');
const userCnt = question('숫자를 입력하세요 : ');

for (let i = 0; i < userCnt; i++) {
    console.log(i);
    console.log(userName);
}
