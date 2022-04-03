/* 다섯개의 과일 이름들의 목록에서 임의의 과일을 출력하라 */

const array = ['사과', '바나나', '딸기', '포도', '체리']; // 0, 1, 2, 3, 4
const randomNum = Math.floor(Math.random() * 5);
console.log(randomNum);
console.log(`다섯개 중 임의로 고른 과일 ${array[randomNum]}`);
