/* 네 명의 이름과 나이 그리고 신발 사이즈를 입력받은 후, 목록에서 제거하고 싶은 사람의 이름을 입력하라고 한다.
입력된 이름의 데이터를 삭제하고 나머지 데이터를 한 줄에 하나씩 출력하라 */

import { question } from 'readline-sync';

const peopleData = {};
let userName = '';
let userAge = 0;
let userSize = 0;

for (let i = 1; i <= 4; i++) {
  userName = question('이름을 입력하세요 ' + i + '번 : ');
  userAge = question('나이를 입력하세요 : ');
  userSize = question('신발사이즈를 입력하세요 : ');
  peopleData[userName] = { age: userAge, size: userSize };
}

const userDelete = question('제거하고 싶은 사람의 이름을 입력하세요 : ');
delete peopleData[userDelete];

console.log(peopleData);
