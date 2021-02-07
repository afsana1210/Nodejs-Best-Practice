var str="nodejs";
str=str.toUpperCase();
console.log("string to upper case :"+str);
 

//original string should also changed to upeercase ,so we used node module upper-case
var uc=require("upper-case");
var prompt=require('prompt-sync')();
var str=prompt("enter string :");
str=uc.upperCase(str);
console.log("string into upper case :"+str);
console.log("original string :"+str);
