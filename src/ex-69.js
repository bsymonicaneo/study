/* 듀플과 리스트 그리고 딕셔너리 
다섯 개의 국가 이름을 튜플로 만들고 출력
표시된 국가 이름들 중 하나를 사용자에게 입력 요청
입력된 국가 이름의 인덱스 번호를 출력 */

import { question } from 'readline-sync';

const contry = ['Korea', 'France', 'Spain', 'China', 'Japan'];
console.log(contry);

const ask = question('번호를 고르시요 : ');
console.log(ask + ' has index number ' + contry.indexOf(ask));
