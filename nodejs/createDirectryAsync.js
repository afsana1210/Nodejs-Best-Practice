var fs=require('fs');
fs.mkdir("abc123",function(err){
    if(err) throw err;
    else
    console.log("folder created...");
});