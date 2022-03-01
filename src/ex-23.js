/* 사용자에게 자장가의 첫 줄을 입력하라고 요청하고 그 문자열의 길이를 출력한다.
사용자에게 범위를 시작할 인덱스 번호를 묻고 범위의 끝 인덱스 번호를 묻는다.
그런 후에 그 범위의 텍스트를 출력하라.
* 인덱스는 1이 아닌 0부터 시작한다. */

import { question } from 'readline-sync';

const fsong = question('자장가의 첫 줄을 입력해주세요');
console.log(`자장가의 총 길이는 ${fsong.length} 입니다.`);
const startnum = question('자장가의 시작 번호를 입력해주세요');
const endnum = question('자장가의 끝 번호를 입력해주세요');
console.log(fsong.slice(startnum, endnum));
