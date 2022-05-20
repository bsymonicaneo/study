import wf from 'node:fs';

const content = '1, 2, 3, 4, 7';
wf.writeFile('file/number2.txt', content, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('파일 생성 완료');
    }
});


// wf.mkdir 폴더 생성