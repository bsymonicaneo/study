/* 다섯 개의 정수를 입력받아 배열에 저장한다
정렬을 한 후 역순으로 표시하라 */

import { question } from "readline-sync";

let fiveNum = []; // 빈 배열 만들기

for (let i = 0; i < 5; i++) {
  let userFive = question('정수를 입력하세요: ');
  fiveNum[i] = userFive;
}

fiveNum.sort(); // 정렬쓰
console.log(fiveNum); // 정렬한거 확인 
console.log(fiveNum.reverse()); // 정렬한거 역순 표시
