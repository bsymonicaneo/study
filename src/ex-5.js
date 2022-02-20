// 사용자로부터 3개의 숫자를 입력받는다.
// 첫번째 숫자와 두번째 숫자를 더한 값에
// 세번째 숫자를 곱한 결과를 다음과 같이 출력하라.
import { question } from "readline-sync";

const number1 = question('1번째 숫자를 입력하세요.');
const number2 = question('2번째 숫자를 입력하세요.');
const number3 = question('3번째 숫자를 입력하세요.');
console.log('결과:', ((Number(number1) + Number(number2)) * Number(number3)));
