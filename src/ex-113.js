/* Books.csv 파일을 사용하며, 리스트에 몇 개의 레코드를 추가하고 싶은지 묻고 입력한 만큼 추가할 수 있도록 한다.
모든 데이터가 추가된 후에 사용자에게 검색할 저자의 이름을 입력하라고 요청하고,
입력한 저자의 모든 책 정보를 출력한다. 만약 입력한 저자의 책이 하나도 없다면 그에 맞는 메시지를 출력한다. */

import { question } from "readline-sync";
import file from 'node:fs';

let count = question('몇 개의 레코드를 추가? : ');

while (count > 0) {
  const books = file.readFileSync('Books.csv', 'utf8');
  const bookList = books.split('\n');
  const bookData = question(
    '새로운 책 데이터를 입력하세요 (title,author,publication data) : '
  );

  file.appendFileSync(
    'Books.csv',
    bookList.length - 2 + ',' + bookData + '\n',
    'utf8'
  );
  count--;
}

const result = file.readFileSync('Books.csv', 'utf8');
const resultList = result.split('\n');
console.log('\n');
console.log(result);
const author = question('검색할 저자의 이름은? : ');

for (const [idx, value] of resultList.entries()) {
  if (value.split(',')[2].trim() === author) {
    console.log(value);
  }
}
