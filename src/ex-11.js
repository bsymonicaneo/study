// 사용자로부터 100이 넘는 숫자를 입력받고 10 미만의 숫자 하나를 입력받은 후,
// 작은 숫자가 큰 숫자 안에 몇번 들어가는지 사용자 친화적인 형식으로 출력하라.

import { question } from "readline-sync";
const num1 = question('100이 넘는 숫자를 입력 하세요.');
const num2 = question('10 미만의 숫자를 입력 하세요.');
let arr = Array.from({length: num1}, (v , i) => i + 1);
let count = arr.join('').match(num2).length;
console.log(count);
