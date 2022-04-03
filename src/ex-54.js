/* 앞면과 뒷면 ('h' 그리고 't')중 임의로 선택한다.
사용자에게 어떤 것을 고를지를 요청한다.
만약 사용자의 선택과 임의로 선택한 값이 서로 같으면 > "You win" 메시지를 출력
만약 사용자의 선택과 임의로 선택한 값이 같지 않으면 > "Bad luck" 메시지를 출력
마지막에 컴퓨터가 선택한 것이 무엇인지를 사용자에게 알려줘라. */

import { question } from "readline-sync";

console.log('앞면(h)과 뒷면(t) 선택하세요 (h or t)? ');
const select = question();

const ramdomNumber = Math.floor(Math.random() * 2);
let ramdomValue = 'h';
console.log('컴퓨터의 선택 : ' + ramdomNumber);
ramdomValue = ramdomNumber === 0 ? 'h' : 't';
console.log('사용자의 선택 : ' + select);
console.log('컴퓨터의 선택 : ' + ramdomValue);

if (select == ramdomValue) {
  console.log('You win');
} else {
  console.log('Bad luck');
}

// 너무 어려워  설명이 필요함*****
