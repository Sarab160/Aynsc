import inquirer from "inquirer";
const users = [{
        username: "sarab160",
        pin: "1601",
        balance: 12323
    },
    {
        username: "bilal13",
        pin: "1123",
        balance: 123213
    },
    {
        username: "jackdead23",
        pin: "2342",
        balance: 2342
    }, {
        username: "cheema12",
        pin: "1133",
        balance: 23213
    },
    {
        username: "wasif34",
        pin: "1233",
        balance: 344
    }, {
        username: "sarab2",
        pin: "1603",
        balance: 12323123
    }, {
        username: "sarab3",
        pin: "1604",
        balance: 12323123
    }
];
const logindata = await inquirer.prompt([{
        type: "input",
        name: "username",
        message: "Enter your name"
    },
    {
        name: 'PIN',
        type: "password",
        message: "Enter your password",
        mask: "*",
        validate(input) {
            if (input.length == 4) {
                return true;
            }
            else {
                return false;
            }
        }
    }
]);
const loggedInuser = users.find((user) => user.username == logindata.username && user.pin == logindata.PIN);
if (loggedInuser) {
    console.log(`Welcome back ${logindata.username}`);
}
else {
    console.log("username or password is incorrect");
}
