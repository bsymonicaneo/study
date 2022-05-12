/* 096번 프로그램의 2차원 배열을 이용하여 사용자에게 표시할 행을 요청하고 그 행을 출력한다.
새로운 값을 입력하라고 요청하고 그것을 표시한 행에 추가하고 그 행을 다시 출력하라. */


import { question } from "readline-sync";

const array04 = [
    [' ', '0', '1', '2'],
    ['0', '2', '5', '8'],
    ['1', '3', '7', '4'],
    ['2', '1', '6', '9'],
    ['3', '4', '2', '0'],
];
  
const row = question('행을 선택하세요 : ');
const resultRow = Number(row) - 1; // 인덱스는 0부터 잡기 때문에 -1 해주는 것
console.log(array04[resultRow]);

 
const array05 = [];
for (let i = 0; i < 4; i++) {
    const newrow = question('새로운 값을 입력하세요 : ');
    array05[i] = newrow;
};

const resultRow1 = array04.splice(Number(row) - 1, 1, array05);
console.log(array04);
