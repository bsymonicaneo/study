// 1킬로그램은 2.204 파운드다.
// 몸무게를 킬로그램 단위로 입력받아서 파운드로 변환하여 출력하라
import { question } from "readline-sync";

const kg = question('몸무게kg을 입력 하세요.');
const pound = ( kg * 2.204);
console.log(`몸무게는 ${pound} 파운드 입니다.`);
