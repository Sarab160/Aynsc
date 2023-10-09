import inquirer, { Answers } from "inquirer"
import chalk from "chalk";
//other code to check your gender
console.log(chalk.blue("ENTER DATA AND CHECK YOUR GENDER"));
await console.log(chalk.black("logically proved your gender"));
async function studentgender() {
   var name= await inquirer.prompt([{
        type:"string",
        name:'name',
        message:"Enter yur name"
    }])
   var data= await inquirer.prompt([{
        type:"number",
        name:'chromosomes',
        message:"Enter yur chromosomes"
    }])
    if(data.chromosomes==46){
        console.log(chalk.green(`${name.name} yu are male maybe female`));
    }
    else{
        console.log(chalk.green(`${name.name} yu are khusra(SHEMALE)`));
    }
}
studentgender();





