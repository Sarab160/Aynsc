import inquirer from "inquirer";
console.log("table of random");

let tableof = await inquirer.prompt([{
    type:"number",
    name:"number",
    message:"enter number"
 }])
 console.log('enter your table number');
 
 let table = await inquirer.prompt([{
    type:"number",
    name:"table",
    message:"enter table name"
 }])

 for(let i=0;i<=tableof.number;i++){
var firstStep:unknown = table.table * i;
var tableofany = `${table.table} *${i} = ${firstStep}`;
   console.log(tableofany);
   
// console.log(`2 * ${i} = ${firstStep}`);




 }
