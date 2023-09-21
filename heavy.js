import inquirer from "inquirer";
async function userinput() {
    try {
        var emote = await inquirer.prompt([{
                type: "number",
                name: "num",
                message: "Enter yur number"
            }]);
    }
    catch (err) {
        console.log("err", err);
    }
    finally {
        if (emote.num < 10) {
            console.log("enter yur valid number");
        }
    }
    console.log(emote);
}
//userinput();
var result = 21;
if (result == 21) {
    throw new Error("err rae coming");
}
console.log("hello");
