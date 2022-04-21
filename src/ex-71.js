/* 두 개의 스포츠 이름을 담고 있는 리스트를 생성하라.
사용자에게 좋아하는 스포츠가 뭔지 물어보고 그것을 리스트 끝에 추가하라.
리스트를 정렬하고 출력하라. */

import { question } from 'readline-sync';

const sport1 = ['football', 'baseball']; // 두개의 스포츠 이름 리스트 생성
console.log(sport1);

const asksport = question('좋아하는 스포츠가 무엇인가요? : ');

sport1.push(asksport);
sport1.sort();
console.log(sport1);
