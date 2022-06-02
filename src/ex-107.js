/* ‘Names.txt’ 파일을 열고 읽어서 데이터를 표시하라. */

import { readFile } from 'node:fs';

readFile('Names.txt', 'utf8', (err, data) =>{
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});
