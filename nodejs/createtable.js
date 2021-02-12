var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"nodejs",
    password:"nodejs",
    database:"mydatabase"
});
q1="create table student(c1 int,c2 varchar(20))";
con.query(q1,function(err,result){
    if(err) throw err;
    else
    console.log("Table created...");
});