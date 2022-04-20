/* 사용자에게 파티에 초대할 사람 3명의 이름을 입력하라고 요청하고 리스트에 저장한다
모든 이름이 입력되면 추가할 사람이 있는지 묻는다.
만약 그렇다면 'n'이라고 답할때까지 이름을 추가하게 한다.
'n'이라고 입력하면 파티에 초대한 사람이 몇 명인지 표시하라 */

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
    console.log('you have ' + count + ' people coming to your party');
  }
}
