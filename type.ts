import inquirer from "inquirer";
let data = [{
    type:'number',
    name:"num",
    message:'enter yur number'
}]
try{
var result = await inquirer.prompt(data)}
catch{
    throw new Error("errerererrerere")
}
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
////console.log(call);
let isvoid:void = undefined;
var isunknown:unknown= 23;
if(typeof isunknown == "string"){
    isunknown = "cheema";
//console.log(isunknown)
}
if(typeof isunknown == "number"){
    isunknown == 23;
    console.log(isunknown);
}
function isNever():never{
throw new Error("rertejytg ")
}
// isNever();
let car:{model:string,year:number} = {
    model:"hinda",
    year:212
};

let tuplet:[string,number,boolean] = ['sarab',232,true]
console.log(tuplet);
var num3:string|number|boolean = "sarab cheema";
//union type ha 
type shape={
    area:number,
    size:number
}
type circle={
    area:number,
    size:number
}
let final:shape|circle = {
    area:23,
    size:123
}
let Area:shape&circle = {
    area:23,
    size:23,
    
}




