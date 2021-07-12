const fs = require('fs')

fs.writeFile('./02.txt', 'hello 11111', function(err) {
    console.log(err);
    if(err) {
        console.log('写入文件失败！！');
    }
})