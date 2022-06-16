/* Books.csv 파일의 데이터를 배열로 가져온다. 사용자에게 배열을 표시하고, 배열의 어떤 행을 삭제하고 싶은지를 선택하라고 요청하여 선택한 행을 삭제 한다.
또한, 수정하고 싶은 데이터를 선택하라고 요청하고 선택한 행을 수정한다.
데이터를 원래의 csv 파일에 다시 써서 기존 데이터를 수정된 데이터로 덮어쓴다. */

import file from 'node:fs';
import { question, questionInt } from 'readline-sync';

const result = file.readFileSync('Books.csv', 'utf8'); // Books 파일 읽어옴
const resultList = result.split('\n'); // Books 파일 배열로 가져옴
console.log(resultList);

const userDel = questionInt('삭제할 행 입력 : '); // Books 파일 중 행 하나 삭제
resultList.splice(userDel, 1);
console.log(resultList);

const editIndex = questionInt('수정할 행 입력 : '); // Books 파일 중 하나 수정
const editValue = question(`변경 ${resultList[editIndex]} : `);
resultList[editIndex] = editValue;
console.log(resultList);

const lastList = Object.values(resultList).join('\n');

file.writeFileSync('Books.csv', lastList, { encoding: 'utf-8' });
