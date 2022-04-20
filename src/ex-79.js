/* 'nums'라는 이름의 빈 리스트를 생성한다. 사용자에게 숫자를 입력하라고 요청한다.
숫자가 입력되면 그것을 nums 리스트 끝에 추가하고 리스트를 출력한다.
세 개의 숫자를 입력받으면 마지막 숫자를 저장할 것인지 묻는다.
만약 'n'라고 답하면 리스트의 마지막 항목을 삭제하고 리스트를 출력하라 */

import { question } from "readline-sync";

let que = 'y';
let count = 2;
const nums = [];

while (que === 'y') {
  const userNumber = question('숫자를 입력하세요 : ');
  nums.push(userNumber);
  console.log(nums);

  count--;

  que = question('마지막 숫자를 저장할까요? y/n : ');

  if (que !== 'y') {
    nums.pop();
    console.log(nums);
  }
}
