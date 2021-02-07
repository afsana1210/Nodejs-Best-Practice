var myarea=require("./area");
var myvolume=require("./volume");
const prompt=require('prompt-sync')();
const rc=prompt("enter radius for cylender area");
const hc=prompt('enter height for cylender area');
console.log("Area of cylender :"+ myarea.areac(rc,hc));
console.log("Area of sphere:"+ myarea.areas(2));
console.log("Volume of cylender :"+ myvolume.volumec(2,5));
console.log("Volume of sphere :"+ myvolume.volumes(2));
