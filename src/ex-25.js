/* 사용자에게 이름을 입력하라고 요청한다.
만약 이름의 길이가 5자 미만이면 성을 입력하라고 요청하고
중간 공백 없이 이름과 성을 결합하고 대문자로 출력하라.
만약 이름의 길이가 5자 이상이면 이름을 소문자로 출력하라. */

import { question } from 'readline-sync';
const firstname = question('이름을 입력하세요');

if (firstname.length < 5) {
  const lastname = question('성을 입력하세요');
  const total = lastname + firstname;
  console.log(total.toUpperCase());
} else if (firstname.length >= 5) {
  console.log(firstname.toLowerCase());
}
