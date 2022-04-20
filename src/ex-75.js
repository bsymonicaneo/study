/* 세 자리 숫자가 네 개 담긴 리스트를 생성한다
리스트의 각 항목을 한 줄에 하나씩 출력하여 사용자에게 표시한다
사용자에게 세 자리의 숫자를 입력하라고 요청한다
만약 입력한 숫자가 리스트에 있는 숫자들 중 하나라면 리스트에 그 숫자가 위치한 인덱스를 출력하라
그렇지 않다면 "That is not in the list" 라는 메시지를 출력하라 */

import { question } from 'readline-sync';

const threeNum = ['100', '200', '300', '400'];

threeNum.forEach((number, index) => console.log(number, index));

/* 한줄씩 출력하는 다른 방법  
for (let number of threeNum) {
    console.log(number);
}

console.log(threeNum[0]);
console.log(threeNum[1]);
console.log(threeNum[3]);
console.log(threeNum[4]);
*/

const userNumber = question('세 자리의 숫자를 입력 하세요 : ');
console.log(threeNum.indexOf(userNumber));

if (
  Number(userNumber) === Number(100) ||
  Number(userNumber) === Number(200) ||
  Number(userNumber) === Number(300) ||
  Number(userNumber) === Number(400)
) {
  console.log('고른 번호의 인덱스는 ' + threeNum.indexOf(userNumber));
} else {
  console.log('That is not in the list.');
}
