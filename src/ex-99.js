/* 이전 프로그램을 변경하여 어떤 행을 출력할지 사용자에게 묻는다. 입력받은 행을 출력한다.
열을 선택하라고 요청하고 그 행에서의 해당 열을 출력한다.
그 값을 변경하고 싶은지 사용자에게 묻고, 그러길 원한다면 새로운 값을 입력받아 변경한다.
마지막으로 그 행 전체를 다시 출력하라. */

import { question } from "readline-sync";

const array04 = [
    [' ', '0', '1', '2'],
    ['0', '2', '5', '8'],
    ['1', '3', '7', '4'],
    ['2', '1', '6', '9'],
    ['3', '4', '2', '0'],
];

const row = question('어떤 행을 출력할까요?(숫자) : ');
const resultRow = Number(row) - 1; // 인덱스는 0부터 잡기 때문에 -1 해주는 것
console.log(array04[resultRow]);

const col = question('열을 선택하세요 : ');
const resultCol = Number(col) - 1;
console.log(array04[resultCol]);

/*
const newcol = true;
const array05 = [];

while (newcol) {
    const useranwser = question('값을 변경하고 싶어요?(y/n): ');
    if (useranwser === 'y') {
        for (let i = 0; i < 4; i++) {
            const usernewcol = question('새로운 값을 입력하세요 : ');
            array05[i] = newresultCol;
            const usernewcol1 = array04.splice(Number(row) - 1, 1, array05);
            console.log(array04);
        }
    } else {
        console.log(array04);
    }
};
*/