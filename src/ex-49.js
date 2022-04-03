/* compnum이라는 이름의 변수를 생성하고 50을 설정한다.
사용자에게 숫자를 입력하라고 요청하고 
입력한 값이 compnum과 동일하지 않다면 입력한 값이 높은지 낮은지 알려주고
다시 맞춰보라고 묻는다.
만약 compnum의 값과 일치하면 "Well done, you took [카운트]" attempts"라는 메시지를 출력하라 */

import { question } from "readline-sync";

let compnum = 50;
const usernum = 0;


while (compnum === Number(usernum)) {
    usernum = question('숫자를 입력하세요 : ');
    if (usernum > compnum) {
        console.log('입력값이 더 큼');
    } else if (usernum < compnum) {
        console.log('입력값이 작음');
    } else {
        console.log(`Well done, you took ${usernum} attempts.`);
    }
}
