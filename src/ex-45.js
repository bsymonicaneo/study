/* 045 ~ 051 while 루프 
total이라는 변수를 0으로 설정한다.
total 이라는 값이 50 이하이면 사용자에게 숫자를 입력하라고 요청한다.
입력된 숫자를 total에 더하고
The total is...[total] 이라는 메시지를 출력한다.
total의 값이 50을 넘으면 루프를 멈추는 프로그램을 작성하라 */

import { question } from "readline-sync";

let total = 0;
let usercnt = 0;

while (total <= 50) {
  usercnt = question('숫자를 입력하세요 : ');
  total += Number(usercnt);
  console.log(`The total is ${total}`);
}
