function result(name:string,marks:number){
    console.log("yur result are",result);
    
}
setTimeout(result,1000)
console.log("hello");
function dosomething(){
    console.log("how are yu");
}
console.log("ok bye");
setTimeout(dosomething,1000)
console.log("read the table slowly");
let num = 10;
function table(){
for(let i=0;i<num;i++){
    let table2 = 2 *i;
    console.log(2 ,"*",i ,"=",table2);
}
}
setInterval(table,1000);
console.log("befor aynsc");
let setTimeoutid:number = 0;
  let setTimeoutid1 = setTimeout(()=>{
console.log("setTimeout");
},1000)
if(setTimeoutid<10){
    clearTimeout(setTimeoutid1)//clertimeout clear the data if condition are true
}

function interval(){
    console.log("at the time");
}
 let num2 =setInterval(interval,1000);
if(setTimeoutid<10){
    clearInterval(num2)
}

 class biodata{
    name:string ="";
    rollno:number= 0;
    section:string = "";
    constructor(){
        console.log("students data are here");
    }
}
let studen1 = new biodata();
let student2 = new biodata()
studen1.name = "sarab";
studen1.rollno = 7
studen1.section = "A";
student2.name = "wasif";
student2.rollno = 6
student2.section = "A";
console.log(studen1);
console.log(student2);
class obj {
    carmodel:string="v8";
car:string="honda";
constructor(carmodel:string,car:string){
    this.carmodel = carmodel;
    this.car = car;
    }}
    let newobj = new obj("civic","honda")
console.log(newobj);
let id1 = 10;
function datvalue(resolve:any,reject:any){
   if(id1>1){
    resolve("code sucess")
   }
   else{
    reject("err finding")
   }
}
let resultdata = new Promise(datvalue)

resultdata.then((sucess)=>{
console.log("sucess",sucess);

})
.catch((err)=>{
    console.log("errr",err);
})
