var fs=require('fs');
fs.readFile('server1.js','utf-8',function(err,data){
    if (err) throw err;
    else
    console.log(data);
});