import { question } from 'readline-sync';
const userName = question('이름을 입력하세요 : ');
const userCnt = question('숫자를 입력하세요 : ');

for (let j = 0; j <= userCnt - 1; j++) {
    for (let i = 0; i < userName.length; i++) {
        console.log(userName[i]);
    }
}