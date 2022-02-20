// 사용자로부터 2개의 숫자를 입력 받아서 더한 결과를 다음과 같이 출력하라
import { question } from "readline-sync";

const number1 = question('1번째 숫자를 입력하세요.');
const number2 = question('2번째 숫자를 입력하세요.');
console.log('더한 결과:', Number(number1) + Number(number2));
