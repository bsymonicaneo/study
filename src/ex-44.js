/* 파티에 몇 명을 초대하고 싶은지 묻는다.
만약 10 미만을 입력하면 이름을 묻고 
"[이름] has been invited" 라고 출력하는 것을 입력한 숫자만큼 반복하라.
10 이상을 입력하면 "Too many people" 이라는 메세지를 출력하라 */

import { question } from 'readline-sync';
const user = question('파티에 몇 명 초대할래? : ');

if (user < 10) {
    const name = question('이름이 뭐야? : ');
    for (let i = user; i < 0; i--) {
        console.log(`${name} has been invited.` + i);
    }
}
