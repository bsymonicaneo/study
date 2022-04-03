/* "there are [숫자] green bottles hanging on the wall, [숫자] green bottles hanging on te wall, and if I green bottle should accidentally fall" 이라는 가사를 출력
"how may green bottles will be hanging on the wall?" 이라고 질문한다
만약 사용자가 맞히면 > "There will be [숫자] green bottles hanging on the wall"이라는 메시지 출력
만약 사용자가 틀리면 > "No, try again" 메시지 출력한 뒤 맞출때까지 반복
green bottle의 개수가 0이 되면 > "There are no more green bottles haning on the wall"이라는 메시지 출력하고 종료 */

import { question } from 'readline-sync';

// 처음 병은 10개로 시작
let bottles = 10;
while (bottles <= 10) {
  console.log(
    `\nThere are ${bottles} hanging on the wall,\n${bottles} green bottles hanging on the wall,\nand if i green bottles should accidentally fall\n`
  ); // 병 1개 떨어뜨려버림
  bottles -= 1; // 몇개 남았는지 물어봄
  const choice = Number(
    question('how many green bottles will be haning on the wall? : ')
  ); // 남은거랑 물어봐서 대답받은거랑 같으면 반복 종료
  if (bottles === choice) {
    console.log(`There are ${bottles} hanging on the wall`);
    break; // 계속 못맞춰서 병이 없으면..
  } else if (bottles === 0) {
    console.log('There are no more green bottles hanging on the wall');
    break; // 남은거랑 대답받은거랑 다르면 다시..
  } else {
    console.log('No, try again.');
  }
}
