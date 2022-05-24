/* 111번 프로그램에서 만든 Books.csv 파일을 사용한다. 
사용자에게 다른 레코드를 입력하도록 요청하고 입력된 데이터를 파일의 끝에 추가한다. 
csv 파일의 각 행을 한 줄에 하나씩 출력하라.

import { question } from "readline-sync";

const number = question('Number 입력 : ');
const title = question('Title 입력 : ');
const author = question('Author 입력 : ');
const publicationdate = question('Publication Date 입력 : ');

const newrecord = number + title + author + publicationdate;

*/

import { readFile } from 'fs';
readFile('Books.csv', 'utf8', function (_err, data) {
  console.log(data);
});
