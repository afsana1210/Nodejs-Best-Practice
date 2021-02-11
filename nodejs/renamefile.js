var fs=require('fs');
fs.rename('target','target2',function(err){
    if(err) throw err;
    else
    console.log('file rename...');
});