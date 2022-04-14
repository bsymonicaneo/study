/* 사용자에게 숫자를 입력하라고 요청하고, 입력한 위치의 국가 이름이 출력되는 기능을 069번 프로그램에 추가하라. */

import { question } from 'readline-sync';

const str = ['Korea', 'France', 'Spain', 'China', 'Japan'];

const ask = question('숫자를 입력하세요 : ');

console.log(String.charAt(ask));
