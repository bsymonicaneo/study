// 사용자에게 20보다 작은 숫자를 입력하라고 요청한다.
// 만약 입력된 값이 20과 같거나 크면 "Too high"라는 메시지를 출력하라.
// 그렇지 않다면 "Thank you"를 출력하라.
import { question } from "readline-sync";
const num1 = question('20보다 작은 숫자를 입력 하세요.');
if (num1 >= 20){
    console.log('Too high');
} else {
    console.log('Thank you');
}
