/* 열 개의 색상이 담긴 리스트를 생성한다.
사용자에게 0에서 4 사이의 시작 번호와 5에서 9 사이의 끝 번호를 입력하라고 요청하고,
입력된 시작 번호부터 끝 번호까지의 색상을 출력하라 */

import { question } from 'readline-sync';

const colorList = [
  'red', // 0
  'green', // 1
  'black', // 2
  'white', // 3
  'blue', // 4
  'pink', // 5
  'grey', // 6
  'purple', // 7
  'yellow', // 8
  'brown', // 9
];

const usercolor1 = question('0에서 4 사이의 번호를 입력하세요 : '); 
const usercolor2 = question('5에서 9 사이의 번호를 입력하세요 : '); 

let removedItems = colorList.slice(usercolor1, usercolor2);
console.log(removedItems);
