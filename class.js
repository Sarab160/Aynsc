import inquirer from "inquirer";
console.log('LAPTOP SHOP TO CHECK DATA ON COMPUTER');
var laptops = await inquirer.prompt([{
        type: "string",
        name: "laptopname",
        message: "enter your laptop name"
    }]);
class laptop {
    company = "";
    generation = 0;
    RAM = "";
    harddrive = "";
    price = 0;
}
if (laptops.laptopname == 'dell') {
    var dell = new laptop();
    dell.company = "dell";
    dell.generation = 7;
    dell.RAM = "8 gb";
    dell.harddrive = "500 gb";
    dell.price = 500000;
    console.log(dell);
}
else if (laptops.laptopname == "hp") {
    var hp = new laptop();
    hp.company = "hp";
    hp.generation = 9;
    hp.RAM = "8 gb";
    hp.harddrive = "128 gb";
    hp.price = 450000;
    console.log(hp);
}
else if (laptops.laptopname == "lenovo") {
    var lenovo = new laptop();
    lenovo.company = "lenovo";
    lenovo.generation = 8;
    lenovo.RAM = "16 gb";
    lenovo.harddrive = "256 gb";
    lenovo.price = 400000;
    console.log(lenovo);
}
else {
    throw new Error("ENTER CORRECT COMPANY NAME");
}
