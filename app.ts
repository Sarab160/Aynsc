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

console.log(chalk.blue("time table of software sec-b group 2 non-medical"));


console.log("TIME TABLE data");

async function data(){
    var days = await inquirer.prompt([{
        type:"string",
        name:"day",
        message:"enter day"
}])
  switch(days.day){
    case "monday":
   var firstday =([{
        firstclass:"programinig fundamentals from 9:30 to 10:20",
        secondclass:"lab of ict from 10:30 to 1:20 ",
        break:"1:20 to 2:10",
        thirdclass:"English from 2:10 to 3:00",
        lastclass:"physics from 3:00 to 3:50",
    }])
    console.log(firstday);
    
    break;
    case "tuesday":
     var secondday= ([{
            firstclass:" physics lab from 8:30 to 11:20",
            secondclass:"discreate structure from 11:30 to 12:20 ",
            thirdclass:"class free 12:20 to 1:20",
            break:"1:20 to 2:10",
            forthclass:"English from 2:10 to 3:00",
            lastclass:"English from 3:00 to 3:50",
        }])
        console.log(secondday);
        
        break;
        case "wednesday":
            var thirdday = ([{
                firstclass:" free",
                secondclass:"discreate structure from 9:30 to 10:20 ",
                thirdclass:"lab of programining fundamentals from 10:30 to 1:20",
                break:"1:20 to 2:10",
                forthclass:" programining fundamentals from 2:10 to 3:00",
                lastclass:"Quran translation from 3:00 to 3:50",
            }])
            console.log(thirdday);
            
            break;
            case "thursday":
            var fourthday = ([{
                firstclass:" discreate structure from 8:30 to 9:20",
                secondclass:"  free " ,
                thirdclass:"   free",
                break:"1:20 to 2:10",
                lastclass:" introduction to ict from 2:10 to 3:00",
            }])
            console.log(fourthday);
        
            break;
            case "friday":
                var fifthday = ([{
                    firstclass:" free ",
                    secondclass:"programinig fundamentals from 9:30 to 10:20 " ,
                    thirdclass:"   free",
                    fourthclass:'physics from 11:30 to 12:20',
                    lastclass:" introduction to ict from 12:30 to 1:20",
                }])
                console.log(fifthday);
                
                break;
                case "saturday":
           var sixthday:string = "today is off";
           console.log(sixthday);
           
            break;
            case "sunday":
                var seventhday:string = "today is off";
                console.log(seventhday);
                 break;

  }
}

 //data();





