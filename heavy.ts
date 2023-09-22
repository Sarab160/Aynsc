import inquirer from "inquirer";
import chalk from "chalk";
async function userinput(){
    try{
        var emote = await inquirer.prompt([{
            type:"number",
        name:"num",
        message:"Enter yur number"
    
    }])
    }
    catch(err){

    console.log("err",err);
    
    }
    finally{
        if(emote.num<10){
            console.log("enter yur valid number");
        }
        
    }
    
    //console.log(emote);
    
}
//userinput();
var result:number = 21;
if(result==21){
  //  throw new Error("err rae coming")
};
console.log(chalk.blue("hello"));
console.log(chalk.bgGrey("hello world"));
console.log(chalk.bgGreen("hello") + chalk.blue.bold("hello world") + chalk.bgGreen.bold("hello"));


    async function studentdata() {
    await inquirer.prompt([{
        type:"string",
        name:'name',
        message:"Enter yur name"
    }])
    await inquirer.prompt([{
        type:"string",
        name:'father name',
        message:"Enter yur father name"
    }])
    await inquirer.prompt([{
        type:'number',
        name:'class',
        message:'Enter tur class'
    }])
    await inquirer.prompt([{
        type:"string",
        name:'section',
        message:'Enter yur section'
    }])
    await inquirer.prompt([{
        type:"number",
        name:'Rolln no',
        message:"Enter yur roll no"
    }])
    await inquirer.prompt([{
        type:"numebr",
        name:"total marks",
        message:"Enter total marks"
    }])
    await inquirer.prompt([{
        type:"number",
        name:"obtained marks",
        message:"Enter obtain marks"
    }])
   
}
studentdata();

    let persondata =[{
        type:"name",
        message:"enter yur name"
    }];
    [{
        type:"number",
        message:"Enter yur number"

    }]
try{
     var result1 = await inquirer.prompt(persondata)
}
catch(err){
    console.log(chalk.blue("err"));
}
finally{
    console.log(chalk.blue('thanks for visiting'));
    
}