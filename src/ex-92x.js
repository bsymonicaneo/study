/* 두개의 빈 배열을 생성한다. 하나에는 사용자가 입력할 숫자 세개를 담을 것이고, 다른 하나에는 다섯 개의 임의의 숫자를 담을 것이다.
두 개의 배열을 큰 배열 하나로 결합한다.
결합한 배열을 정렬하고 각 항목을 한 줄에 하나씩 출력하라 */

import { lte } from "prettier";
import { question } from "readline-sync";

const arryA = []; // 사용자가 숫자 담을 배열
const arryB = []; // 다섯개의 임의 숫자 담을 배열

for (let i = 0; i < 3; i++) {
  const userNumber = question('숫자 세개를 입력하세요 : ');
  const arryA = [userNumber];
}

for (let j = 0; j < 5; j++) {
  const randomNumber = Math.floor(Math.random() * (20 -1) + 1);
  const arryB = [randomNumber];
}

const arryAB = arryA.concat(arryB);
arryAB.sort();
console.log(arryAB);

// arryAB가 출력이 안 됨...ㅋㅋ
