var num:number= 12;
var name:string= 'sarab';
var notDefined:undefined = undefined;
// console.log(notDefined);
var inNull:null = null;
console.log(inNull);
//void
function username(user:string):void{
    //void ma return nhi hota
}
function username2():string{
return "sarab"
}
var call = username2();
console.log(call);
let isvoid:void = undefined;
var isunknown:unknown= 'string';
if(typeof isunknown == "string"){
    isunknown = "cheema";
console.log(isunknown)
}
if(typeof isunknown == "number"){
    isunknown == 23;
    console.log(isunknown);
}