// 사용자의 이름을 입력받은 다음, 
// 사용자의 성을 입력받아서 다음과 같이 출력하라. Hello [이름] [성]
import { question } from "readline-sync";

const firstname = question('이름을 입력해주세요.');
const lastname = question('성을 입력해주세요.');
console.log('Hello' + ' ' + firstname + ' ' + lastname);