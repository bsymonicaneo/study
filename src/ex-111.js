/* 다음의 데이터를 저장할 csv 파일을 생성하고 그 이름을 'Books.csv' 라고 하라. */

import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

const csvWriter = createCsvWriter({
  path: 'Books.csv',
  header: [
    { id: 'number', title: 'Number' },
    { id: 'title', title: 'Title' },
    { id: 'author', title: 'Author' },
    { id: 'publicationdate', title: 'Publication Date' },
  ],
});

const data = [
  {
    number: '0',
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee',
    publicationdate: '1960'
  },
  {
    number: '1',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    publicationdate: '1988',
  },
  {
    number: '2',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publicationdate: '1922'
  },
  {
    number: '3',
    title: 'The Man Who Mistook His Wife for a Hat',
    author: 'Oliver Sacks',
    publicationdate: '1985'
  },
  {
    number: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publicationdate: '1813',
  },
];

csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));

  /*
Const data = [
  [' ', 'Title', 'Author', 'Publication Date'],
  ['0', 'To Kill A Mockingbird', 'Harper Lee', '1960'],
  ['1', 'A Brief History of Time', 'Stephen Hawking', '1988'],
  ['2', 'The Great Gatsby', 'F. Scott Fitzgerald', '1922'],
  ['3', 'The Man Who Mistook His Wife for a Hat', 'Oliver Sacks', '1985'],
  ['4', 'Pride and Prejudice', 'Jane Austen', '1813'],
];
*/