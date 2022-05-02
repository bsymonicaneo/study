/* 사용자에게 숫자 다섯 개를 입력하라고 요청 한다.
입력된 숫자를 정렬하고 사용자에게 표시한다.
배열의 숫자들 중 하나를 고르라고 사용자에게 요청한다.
입력된 숫자를 배열에서 삭제하고 
새로운 배열에 그 값을 저장하다. */

import { question } from "readline-sync";

const arryA = [];

for (let i = 0; i < 5; i++) {
  const userNumber = question('숫자를 입력하세요 : ');
  arryA[i] = userNumber;
}

arryA.sort();
console.log(arryA);

const delNumber = question('배열의 숫자 중 하나를 고르세요 : ');

const result = arryA.indexOf(delNumber); // 삭제 숫자 배열 찾기
arryA.splice(result, 1); // 숫자 삭제
const delB = [delNumber];

console.log(arryA);
console.log(delB);
