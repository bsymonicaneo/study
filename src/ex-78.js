/* 네 개의 TV 프로그램 타이틀을 담은 리스트를 생성하고 각 항목을 한 줄씩 출력한다.
사용자에게 다른 프로그램을 입력하도록 요청하고 리스트에서 원하는 위치를 묻는다.
입력한 프로그램 타이틀을 원하는 위치에 삽입하고 다섯 개의 TV 프로그램 모두를 다시 출력한다. */

import { question } from 'readline-sync';

const tvprogram = ['running man', 'sing again', 'news', 'radio star'];
tvprogram.forEach((number, index) => console.log(number, index));

const otherprogram = question('다른 프로그램을 입력 하세요 : ');
const othernumber = question('리스트에서 원하는 위치를 숫자로 입력하세요 : ');

tvprogram.splice(othernumber, 1, otherprogram);
console.log(tvprogram);
