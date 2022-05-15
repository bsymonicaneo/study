/* 두개의 빈 배열을 생성한다. 하나에는 사용자가 입력할 숫자 세개를 담을 것이고, 다른 하나에는 다섯 개의 임의의 숫자를 담을 것이다.
두 개의 배열을 큰 배열 하나로 결합한다.
결합한 배열을 정렬하고 각 항목을 한 줄에 하나씩 출력하라 */

<<<<<<< HEAD
import { question } from 'readline-sync';
=======
import { question } from "readline-sync";
>>>>>>> 32f6aa6df5fc4b096c98da5fe3b506e8c4f33565

const arryA = []; // 사용자가 숫자 담을 배열
const arryB = []; // 다섯개의 임의 숫자 담을 배열

for (let i = 0; i < 3; i++) {
  const userNumber = question('숫자 세개를 입력하세요 : ');
<<<<<<< HEAD
  arryA.push(Number(userNumber));
}

for (let j = 0; j < 5; j++) {
  const randomNumber = Math.floor(Math.random() * (20 - 1) + 1);
=======
  arryA.push(Number(userNumber)); // 넘버는 정렬됨
}

for (let j = 0; j < 5; j++) {
  const randomNumber = Math.floor(Math.random() * (20 -1) + 1);
>>>>>>> 32f6aa6df5fc4b096c98da5fe3b506e8c4f33565
  arryB.push(Number(randomNumber));
}

console.log(arryA);
console.log(arryB);
<<<<<<< HEAD
//const arryAB = arryA.concat(arryB);
arryA.push(...arryB);
arryA.sort(function (a, b) {
  return a - b;
});
console.log(arryA);
=======

// arryA.push(...arryB); // 배열에 배열 합치기
const arryAB = arryA.concat(arryB); 
arryAB.sort(function (a, b) { // 오름차순으로 정렬됨 
  return a - b;
});
console.log(arryAB);

// arryAB가 출력이 안 됨...ㅋㅋ
>>>>>>> 32f6aa6df5fc4b096c98da5fe3b506e8c4f33565
