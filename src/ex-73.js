/* 사용자에게 좋아하는 음식 네 개를 입력하도록 요청하고 
그것들은 인덱스 번호 1부터 시작하는 딕셔너리에 저장한다.
인덱스 번호와 항목이 모두 표시되도록 딕셔너리를 출력한다.
사용자에게 제거하고 싶은 항목을 묻고 그것을 제거한다.
남아있는 데이터를 정렬하고 딕셔너리를 다시 출력한다. */

import { question } from 'readline-sync';

const Food = [];

const Food1 = question('좋아하는 음식을 입력 하세요 : ');
Food.push(Food1);
const Food2 = question('좋아하는 음식을 입력 하세요 : ');
Food.push(Food2);
const Food3 = question('좋아하는 음식을 입력 하세요 : ');
Food.push(Food3);
const Food4 = question('좋아하는 음식을 입력 하세요 : ');
Food.push(Food4);

Food.forEach((Food, index) => console.log(Food, index));

const delfood = question('제거하고 싶은 항목을 입력 하세요 : ');
Food.splice(delfood, 1);
console.log(Food);
