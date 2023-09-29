import inquirer from "inquirer";
let data = [{
    type:'number',
    name:"num",
    message:'enter yur number'
}]
// try{
// //var result = await inquirer.prompt(data)}
// //catch{
//     throw new Error("errerererrerere")
// }
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

enum colors {Red,blue,green,gray}
var newcolors:number = colors.Red
console.log(newcolors);
console.log(colors[colors.blue]);

enum users{Admin,user};
let workusers = {
    names:users[users.Admin],
    benchnumber:23
}
let users1 ={
    names:users[users.user]
} 
console.log(workusers);
//generics
function swap(arr:string[]):string[]{
    return [arr[1],arr[0]];
}
var arrangenew:string[] = swap(["sarab","cheema"]);
console.log(arrangenew);
function swap2<l>(name:l[]):l[]{
    return [name[1],name[0]]
}
var newArrange:string[] = swap2<string>(['Rafique',"cheema"])
console.log(newArrange);
var newarrang2:number[] = swap2<number>([121,2324,454]);
console.log(newarrang2);
var newarrang3:boolean[] = swap2<boolean>([true,false])
console.log(newarrang3);

interface studentA{
    name:string,
    rollno:number,
    class:number
}
let data2:studentA = {
    name: "sarab",
    rollno: 12,
    class: 12
}
interface data {
    name:string,
    yourEducation:string
}
interface data3 {
    name:string,
    age:number
}
interface data extends data3{
    Experiens:string
}
let combinedata:data= {
    Experiens:"kafi zyada ha",
    name:"sarab",
    age:23,
    yourEducation:"bht achi ha"
    
}
console.log(combinedata.name);




