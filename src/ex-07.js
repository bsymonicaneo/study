// 사용자로부터 이름과 나이를 입력 받아서 나이에 1을 더한 후 다음과 같이 출력하라.

import { question } from "readline-sync";

const name = question('이름을 입력 해주세요.');
const age = question('나이를 입력 해주세요.');
console.log(name + 'next birthday you will be ' + (Number (age) + 1));

// 숫자는 '' 안에 넣어서 문자가 되지 않도록 주의
