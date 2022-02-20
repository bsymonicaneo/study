// 계산서의 총 가격과 몇 명이 같이 식사를 했는지 입력받는다.
// 총 가격을 인원수로 나누고 각 사람이 얼마씩 내야 하는지 출력하라.
import { question } from "readline-sync";

const price = question('총 가격을 입력해 주세요.');
const people = question('총 몇 명이 식사했는지 입력해 주세요.');
let money = price / people;
console.log(`한 사람당 ${money} 씩 내야 합니다.`);
