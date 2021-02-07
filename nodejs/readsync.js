const fs=require('fs');
const data=fs.readFileSync("target");
console.log(data);//data return in buffer formate
console.log(data.toString());//changed data into string 

const prompt=require('prompt-sync')();
const fn=prompt("Enter file name : ");
const data1=fs.readFileSync(fn);
console.log("file content :"+data1.toString());
