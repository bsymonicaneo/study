import { writeFile } from 'node:fs';

const content = ' 1\n 2\n 3\n 4\n 5';

writeFile('Names.txt', content, err =>{
    if(err){
        console.log(err);
        return;
    }
});
