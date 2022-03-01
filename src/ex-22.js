/* 사용자에게 이름과 성을 소문자로 입력하라고 요청한다. 
각 첫 문자만 대문자로 변경하고 
이름과 성 사이에 공백을 하나 두어 결합한 후에 그 결과를 출력하라 */
import { question } from 'readline-sync';
const name1 = question('이름을 소문자로 입력하세요');
const name2 = question('성을 소문자로 입력하세요');
const string_1 = name1.slice(0,1).toUpperCase() + name1.slice(1);
const string_2 = name2.slice(0,1).toUpperCase() + name2.slice(1);
console.log(`${string_1} ${string_2}`);
