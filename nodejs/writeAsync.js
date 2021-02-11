var fs=require('fs');
fs.writeFile("target",'Test nodejs file Asynchronously',function(err){
    if(err) throw err;
    else
    console.log('File created..');
});