/* 피그 라틴(Pig Latin)은 단어의 첫 자음을 가져와서 단어 끝으로 이동하고 마지막에 'ay'를 추가한다.
만약 단어가 모음으로 시작한다면 단어의 끝에 그냥 'way'를 붙인다.
예를 들어 'pig'라는 단어는 'igpay', 'banana'는 'ananabay' 그리고 'aadvark'는 'aadvarkway'가 된다.
사용자에게 단어를 입력받아서 피그 라틴으로 변환하고 소문자로 출력하는 프로그램을 만들어라. */

import { question } from 'readline-sync';
const ftext = question('영어로 단어를 입력하세요');
const ftextLower = ftext.toLocaleLowerCase(); // 소문자로 변환 
const ftextfirst = ftextLower.slice(0, 1); // 첫 글자

if (
    ftextfirst === 'a' ||
    ftextfirst === 'i' ||
    ftextfirst === 'o' ||
    ftextfirst === 'e' ||
    ftextfirst === 'u' ||
) {
    console.log(ftextLower + 'way'); // 첫 글자가 모음일 경우
} else {
    console.log(ftextLower.slice(1) + ftextfirst + 'ay'); // 첫 글자가 모음이 아닌 결우
}
