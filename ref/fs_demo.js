const fs = require('fs');
const path = require('path');


if (!fs.existsSync(path.join(__dirname, 'test'))) {
    fs.mkdir(path.join(__dirname, 'test'), {}, function (err) {
        if (err) throw err;
        console.log('Folder created ...');
    });
} else {
    console.log('Folder existed ..');
}

// fs.writeFile(path.join(__dirname, 'test', 'content.txt'),
//     'Hello man, It is a good day to code Javascript',
//     err => {
//         if (err) throw err;
//         console.log('File create and written to ...');
//     }
// );

// fs.appendFile(path.join(__dirname, 'test', 'content.txt'),
//     '\nWhat a wonderful Asyncronous operation',
//     err => {
//         if (err) throw err;
//         console.log('File appended');
//     });

fs.readFile(path.join(__dirname, 'test', 'content.txt'),
    'utf8',
    (err,data) =>{
        if(err) throw err;
        console.log(data);
    }
);

fs.rename(path.join(__dirname, 'test', 'content.txt'),
    path.join(__dirname, 'test', 'data.txt'),
    (err) =>{
        if(err) throw err;
        console.log('File renamed ...');
    }
);