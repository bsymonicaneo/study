/* Books.csv 파일을 사용하여 각 행 번호와 그에 대한 데이터를 출력하라. */

import file from 'node:fs';

const result = file.readFileSync('Books.csv', 'utf8');
const resultList = result.split('\n');

for (let i = 0; i < resultList.length - 1; i++) {
  const rowData = resultList[i].split(',');

  console.log('No.: ' + rowData[0]); // 행
  console.log('데이터 : ' + rowData[1] + ',' + rowData[2] + ',' + rowData[3]);
}
