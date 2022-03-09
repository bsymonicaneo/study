/* 다음과 같은 메시지를 표시한다.
1) Square 
2) Triangle
Enter a number : 
만약 사용자가 1을 입력하면 한 면의 길이를 요청하여 사각형의 넓이를 구하여 출력하라
만약 2를 입력하면 밑변과 높이를 요청하여 삼각형의 넓이를 구하여 출력하라
다른 것을 입력하면 적절한 오류 메시지가 출력되도록 한다. */

import { question } from 'readline-sync';
console.log('1) Square');
console.log('2) Triangle');
const fnumber = question('Enter a number : ');

if (fnumber == 1) {
    const fnumber1 = question('한 면의 길이를 입력하세요');
    console.log(fnumber1 * fnumber1);
} else if (fnumber == 2) {
    const fnumber2 = question('밑변을 입력하세요');
    const fnumber3 = question('높이를 입력하세요');
    console.log((fnumber2 * fnumber3) / 2);
} else {
    console.log('1 혹은 2를 입력 하세요');
}
