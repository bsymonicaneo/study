/* 사용자에게 좋아하는 음식 네 개를 입력하도록 요청하고 
그것들은 인덱스 번호 1부터 시작하는 딕셔너리에 저장한다.
인덱스 번호와 항목이 모두 표시되도록 딕셔너리를 출력한다.
사용자에게 제거하고 싶은 항목을 묻고 그것을 제거한다.
남아있는 데이터를 정렬하고 딕셔너리를 다시 출력한다. */

import { question } from 'readline-sync';

const foods = [];

for (let i = 1; i <= 4; i++) {
  const userFood = question(
    '좋아하는 음식 4가지를 입력하세요.' + i + '번째 : '
  );
  foods[i] = userFood;
}

for (const [key, value] of Object.entries(foods)) {
  console.log(`${kay}: ${value}`);
}

const userDelete = question('삭제하고 싶은 음식을 입력하세요 : ');

for (const [key, value] of Object.entries(foods)) {
  if (value === userDelete) {
    delete foods[key];
  }
}

for (const [key, value] of Object.entries(foods)) {
  console.log(`${key} : ${value}`);
}
