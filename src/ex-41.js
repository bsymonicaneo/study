/* 이름과 숫자를 입력하도록 요청한다.
입력한 숫자가 10 미만이면 
입력한 숫자만큼 이름을 출력하고 
10 이상이면 "Too high"를 세 번 출력하라 */

import { question } from "readline-sync";
const userName = question('이름 입력 : ');
const userNumber = question('숫자 입력 : ');

if (userNumber < 10) {
  for (let i = 0; i < userNumber; i++) {
    console.log(userName);
  }
} else {
  for (let j = 0; j < 3; j++) {
    console.log('Too High');
  }
}
