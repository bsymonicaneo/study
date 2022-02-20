// 사용자로부터 처음에 가지고 있었던 피자 조각 수를 입력받고, 
// 몇 조각을 먹었는지 입력받아서 남은 조각 수를 계산하여 
// 사람에게 익숙한 형식으로 출력하라.

import { question } from "readline-sync";

const pizza = question('처음에 가지고 있었던 피자 조각 수를 입력 하세요.');
const eat = question('몇 조각 먹었는지 입력 하세요.');
console.log('남은 피자 조각 :', Number(pizza) - Number(eat));
