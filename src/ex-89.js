/* 정수들을 저장할 배열을 생성한다
임의의 수 다섯개를 생성하고 배열을 저장한다
배열의 항목을 한 줄에 하나씩 출력하라 */

const fiveNumber = []; // 빈 배열 만들기

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * (20 -1) + 1);
  const fiveNumber = [randomNumber];
  console.log(fiveNumber);
}
