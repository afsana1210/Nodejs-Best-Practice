var fs=require('fs');
fs.rmdir("abc123",function(err){
    if(err) throw err;
    else
    console.log("folder deleted...");
});