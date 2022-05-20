import { readFile, appendFile, writeFile, writeFileSync, openSync, appendFileSync, readFileSync } from 'node:fs';
import { question } from 'readline-sync';

let fd;
readFile('Names.txt', 'utf8', (error, data) => {
    console.log(data);

    const name = question('Please enter a new name : ');
    fd = openSync('Name.txt', 'a');
    appendFileSync(fd, name, 'utf8');
    const result = readFileSync('Name.txt', 'utf8');
    console.log(result);
});
