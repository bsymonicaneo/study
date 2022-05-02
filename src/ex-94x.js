/* 다섯개의 숫자들을 가진 배열을 출력한다.
숫자들 중 하나를 고르라고 사용자에게 요청한다.
사용자가 숫자를 고르면 그 항목의 위치(인덱스)를 출력한다.
만약 사용자가 입력한 숫자가 배열 안에 없다면 올바른 숫자를 입력할때까지 다시 요청하라 */

import { question } from "readline-sync";



/*
Let tryagain = true;

while (tryagain) {
  const fiveNum = [1, 2, 3, 4, 5];
  console.log(fiveNum);
  const pickNum = question('숫자 중 하나를 고르세요 : ');
  const result = fiveNum.indexOf(pickNum);
  if (fiveNum !== pickNum) {
      const repickNum = question('다시 고르세요: ');
  } else {
      console.log(result);
      tryagain = false;
  }
}
*/

// 유저가 고른 숫자랑 배열이 같은지 매치가 안됨
