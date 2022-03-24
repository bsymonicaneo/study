/* 사용자가 파티에 초대하고 싶은 사람의 이름을 입력하라고 요청한다.
그 다음에 "[이름] has now been invited"라는 메세지를 출력하고 카운트에 1을 더한다.
다른 사람을 더 초대하고 싶은지를 묻고 
더 이상 파티에 초대하고 싶은 사람이 없을 때까지 반복한다.
초대하고 싶은 사람이 없다면 몇 명이 파티에 참석하는지 표시하라 */

import { question } from "readline-sync";

let que = 'y';
let count = 0;

while (que === 'y') {
    const name = question('파티에 초대하고 싶은 사람 이름 입력 : ');
    console.log(name + ' has now been invited.');
    count++;
    que = question('사람 더 초대함? y/n : ');

    if (que !== 'y') {
        console.log('you have ' + count + ' people coming to your party');
    }
}
