/* 사용자에게 대문자로 메시지를 입력하라고 요청한다.
만약 메시지에 소문자가 있다면 모두 대문자로 입력할 때까지 계속해서 다시 입력하라고 요청한다. */

import { question } from "readline-sync";

const usermag = question('대문자로 메시지를 입력하세요 : ');

let tryagain = true;

while (tryagain === true) {
  if (usermag.toLocaleUpperCase) {
    console.log('Thank you');
    tryagain = false;
  } else if (usermag.toLocaleLowerCase) {
    const usermag = question('대문자로 메시지를 입력하세요 : ');
  }
}

// 소문자 안됨 
