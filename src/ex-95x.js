/* 소수점 이하 두 자리가 있는 10과 100 사이의 숫자 다섯 개를 포함하는 배열을 생성한다.
사용자에게 2와 5 사이의 정수를 입력하도록 요청한다.
입력한 숫자가 범위에 없는 숫자라면 적절한 에러 메시지를 출력하고 다시 입력 하라고 한다.
배열에 있는 각 숫자를 사용자가 입력한 숫자로 나누고 소수점 둘째자리까지 표시하라. */

import { question } from "readline-sync";

let arryA = [11.11, 12.12, 13.13, 33.33, 55.55];

let tryagain = true;
while (tryagain) {
  let pickNum = question('2와 5 사이의 정수 입력 : ');
  if (pickNum <= 2 || pickNum >= 5) {
    console.log('다시 입력하세요.');
  } else {
    tryagain = false;
  }
}

for (let i = 0; i < 5; i++) {
  result = Number[i] / Number(pickNum);
  console.log(result.toFixed(2));
}
