/* 사용자에게 파티에 초대할 사람 3명의 이름을 입력하라고 요청하고 리스트에 저장한다
모든 이름이 입력되면 추가할 사람이 있는지 묻는다.
만약 그렇다면 'n'이라고 답할때까지 이름을 추가하게 한다.
'n'이라고 입력하면 파티에 초대한 사람이 몇 명인지 표시하라 */

import { question } from 'readline-sync';

const partyPeople = [];

for (let i = 0; i <= 2; i++) {
  partyPeople.push(
    question('파티에 초대할 사람을 3명 입력하세요 ' + (i + 1) + '번 : ')
  );
}

console.log(partyPeople);

let answer = 'y';
while (answer !== 'n') {
  answer = question('파티에 사람을 더 초대하시겠습니까? (y/n) : ');
  if (answer === 'n') {
    console.log(
      '파티에 초대한 사람의 수는 ' + partyPeople.length + ' 명 입니다.'
    );
    console.log(partyPeople);
  } else {
    partyPeople.push(question('파티에 초대할 사람을 더 입력하세요 : '));
  }
}

/* 
Const name1 = question('첫 번째 초대할 사람의 이름을 입력하세요 : ');
const name2 = question('두 번째 초대할 사람의 이름을 입력하세요 : ');
const name3 = question('세 번째 초대할 사람의 이름을 입력하세요 : ');
const huma = [name1, name2, name3];
let another = '';

while (another.toUpperCase()) !== 'N') {
  another = question('더 초대할래요?(y/n): ');
  console.log(another);
  if (another.toUpperCase() === 'N') {
    console.log('파티에 초대된 사람은 ' + human.length);
  } else {
    const newname = question('초대할 사람의 이름을 입력하세요: ');
    human.push(newname);
  }
}
*/