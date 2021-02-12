var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"postgres",
    password:"postgres"
});
con.connect(function(err){
    if(err) throw err;
    else
    console.log("connected to Database...");
});