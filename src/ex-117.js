/* 사용자의 이름을 묻는다.
두 개의 수(1부터 100까지)를 입력 받아 두 수를 더하는 퀴즈를 만들어 출력하고 답을 입력받는다.
총 2개의 문제를 입력받고, 답을 맞추면 점수를 +1 한다.
사용자의 이름과 질문, 답변 그리고 최종 점수를 csv 파일에 저장한다. 프로그램이 실행될 때마다 csv 파일에 추가되며 덮어쓰지 않는다 */

import file from 'node:fs';
import { questionInt } from 'readline-sync';

const read = file.readFileSync('quize.csv', { encoding: 'utf-8' });
const txtHeader = `User Name, User Score, QuizList, AnswerList\n`;
let quizContent = '';

if (read === '') {
  quizContent = txtHeader;
}

const userName = questionInt('이름을 입력하세요 : '); // 사용자 이름 묻기
const quizSize = Number(2);
let quizScore = 0;
const quizList = [];
const answerList = [];

for (let i = 0; i < quizSize; i++) {
  const firstNumber = questionInt('첫번째 숫자 (1~100까지) : ');
  const secondNumber = questionInt('두번째 숫자 (1~100까지) : ');
  const quiz = questionInt(`${firstNumber}+${secondNumber} : `);
  quizList.push(`${firstNumber}+${secondNumber}`);
  answerList.push(quiz);
  if (firstNumber + secondNumber === quiz) {
    quizScore++;
  } else {
    
  }
}