var fs=require('fs');
fs.appendFile("target","append file content",function(err){
    if (err) throw err;
    else
    console.log("file created..");
});