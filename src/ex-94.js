/* 다섯개의 숫자들을 가진 배열을 출력한다.
숫자들 중 하나를 고르라고 사용자에게 요청한다.
사용자가 숫자를 고르면 그 항목의 위치(인덱스)를 출력한다.
만약 사용자가 입력한 숫자가 배열 안에 없다면 올바른 숫자를 입력할때까지 다시 요청하라 */

import { question } from 'readline-sync';

const arrayNumber = [5, 6, 4, 8, 9];
console.log(arrayNumber);

let stat = true;
while (stat) {
  const usernum = Number(question('배열의 숫자들 중 하나를 입력해주세요. : '));
  const numchk = arrayNumber.indexOf(usernum);
  if (numchk < 0) {
    console.log('배열의 숫자들중 하나가 아닙니다.');
  } else {
    stat = false;
    console.log(`${usernum} 의 인덱스번호는 ${numchk} 입니다.`);
  }
}
