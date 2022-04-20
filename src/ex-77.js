/* 076번 프로그램을 수정하여 초대할 사람들의 이름이 리스트에 모두 추가되면 전체 명단을 출력하고
리스트에 있는 이름들 중 하나를 입력하라고 요청한다
입력된 이름의 위치(인덱스)를 출력하고 
그 사람을 정말로 파티에 초대할 것인지를 묻는다
만약 'n'라고 답하면 그 항목을 리스트에서 삭제하고 리스트를 다시 출력한다 */

import { question } from 'readline-sync';

let que = 'y';
let count = 0;
const party = [];

while (que === 'y') {
  const name = question('파티에 초대하고 싶은 사람 이름 입력 : ');
  party.push(name);
  console.log(party);

  count++;

  que = question('사람 더 초대함? y/n : ');

  if (que !== 'y') {
    console.log(party);
  }
}

const listname = question('리스트에 있는 이름 중 하나를 입력하세요 : ');
console.log(party.indexOf(listname));

const invitparty = question('정말로 파티에 초대할거니? (y/n) : ');
if (invitparty === 'n') {
  party.splice(listname, 1);
  console.log(party);
} else {
  console.log('Have a nice party');
}
