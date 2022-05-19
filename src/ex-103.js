// 102번 프로그램을 수정하여 모든 사람의 이름과 나이를 출력하라. 단, 신발 사이즈는 출력하지 않는다.

import { question } from 'readline-sync';

const peopleData = {};
let userName = '';
let userAge = 0;

for (let i = 1; i <= 4; i++) {
  userName = question('이름을 입력하세요 ' + i + '번 : ');
  userAge = question('나이를 입력하세요 : ');
  peopleData[userName] = { name: userName, age: userAge };
}

console.log(peopleData);
