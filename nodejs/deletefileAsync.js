var fs=require('fs');
fs.unlink('target1',function(err){
    if(err) throw err;
    else
    console.log("file deleted...");
});
console.log("****");