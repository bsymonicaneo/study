// 사용자의 이름을 입력 받아서 다음과 같이 출력하라. Hello [이름]
import { question } from "readline-sync";

const firstname = question('이름을 입력해주세요.');
console.log('Hello' + ' ' + firstname);
