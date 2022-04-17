/* 교과목 여섯 개가 담긴 리스트를 생성하라.
이들 중 사용자가 좋아하지 않는 과목을 묻고
그 과목을 리스트에서 삭제한 후에 리스트를 다시 출력하라 */

import { question } from 'readline-sync';

const userlist = [
  'maths',
  'english',
  'korean',
  'history',
  'science',
  'computing',
];
console.log(userlist);

const unlike = question('위 과목 중 좋아하지 않는 과목은? : ');

const userunlike = userlist.indexOf(unlike); // 싫은 과목 배열 숫자 찾기
userlist.splice(userunlike, 1); // 싫은 과목 배열 삭제
console.log(userlist); // 배열 재 출력
