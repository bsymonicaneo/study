/* 다섯개의 국가 이름을 담고 있는 튜플을 만들고 튜플 전체를 출력하라
표시된 국가 이름들 중 하나를 입력하라고 사용자에게 요청하고,
입력된 국가 이름의 인덱스 번호 (즉, 목록에서의 위치)를 출력하라 */

import { question } from 'readline-sync';

const contry = ['Korea', 'France', 'Spain', 'China', 'Japan'];
console.log(contry);

const ask = question('표시된 국가 이름 중 하나를 입력하세요 : ');
console.log(ask + ' has index number ' + contry.indexOf(ask));
