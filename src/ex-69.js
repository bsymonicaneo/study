
import { question } from 'readline-sync';

const contry = ['Korea', 'France', 'Spain', 'China', 'Japan'];
console.log(contry);

const ask = question('번호를 고르시요 : ');
console.log(ask + ' has index number ' + contry.indexOf(ask));
