// 12 ~ 19 if 문
// 두 개의 숫자를 입력받는다.
// 만약 첫 번째 숫자가 두 번째 숫자보다 크면, 두 번째 숫자를 출력하라.
// 그렇지 않다면 첫 번째 숫자를 출력한 다음에 두 번째 숫자를 출력하라.
import { question } from "readline-sync";
const num1 = question('첫 번째 숫자를 입력 하세요.');
const num2 = question('두 번째 숫자를 입력 하세요.');
if (num1 > num2) { // 괄호안의 조건
  console.log(num2); // 괄호안의 조건이 참일때 할 일
} else {
  console.log(num1, num2); // 괄호안의 조건이 거짓일때 할 일
}
