/* �迭�� ��ü
�ټ����� ���� �̸��� ��� �ִ� Ʃ���� ����� Ʃ�� ��ü�� ����϶�
ǥ�õ� ���� �̸��� �� �ϳ��� �Է��϶�� ����ڿ��� ��û�ϰ�,
�Էµ� ���� �̸��� �ε��� ��ȣ (��, ��Ͽ����� ��ġ)�� ����϶� */

import { question } from 'readline-sync';

const contry = ['Korea', 'France', 'Spain', 'China', 'Japan'];
console.log(contry);

const ask = question('ǥ�õ� ���� �̸� �� �ϳ��� �Է��ϼ��� : ');
console.log(ask + ' has index number ' + contry.indexOf(ask));
