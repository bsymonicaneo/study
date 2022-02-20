// 사용자로부터 일수(날짜 수)를 입력 받아서
// 그 일수까지 몇 시간, 몇 분, 몇 초가 남았는지 출력하라.

import { question } from "readline-sync";

const day = question('날짜 수를 입력 해주세요.');
const hour = Number(day) * 24;
const min = hour * 60;
const sec = min * 60;
console.log(`${hour} 시간 OR ${min} 분 OR ${sec} 초 남았습니다.`);
