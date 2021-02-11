var fs=require('fs');
fs.readFile("target",function(err,data){
    if(err) throw err;
    else
    console.log(data.toString());
});
console.log("**********");