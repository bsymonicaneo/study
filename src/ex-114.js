/* Books.csv 파일을 사용하며, 사용자에게 시작 년도와 끝 년도를 입력하라고 요청한다. 입력된 두 년도 사이에 출간된 모든 책을 출력하라. */

import file from 'node:fs';
import { questionInt } from 'readline-sync';

const start = questionInt('시작 년도를 입력 : ');
const end = questionInt('끝 년도를 입력 : ');

const result = file.readFileSync('Books.csv', 'utf8');
const resultList = result.split('\n');

for (let i = 0; i < resultList.length - 1; i++) { // 배열의 길이를 가져옴
  const pubYear = Number(resultList[i].split(',')[3]); // 구분자 쉼표로, 3번째 정보 가져옴

  if (pubYear >= start && pubYear <= end) {
    console.log(resultList[i]);
  }
}
