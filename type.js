import inquirer from "inquirer";
let data = [{
        type: 'number',
        name: "num",
        message: 'enter yur number'
    }];
try {
    var result = await inquirer.prompt(data);
}
catch {
    throw new Error("errerererrerere");
}
var num = 12;
var name = 'sarab';
var notDefined = undefined;
// console.log(notDefined);
var inNull = null;
console.log(inNull);
//void
function username(user) {
    //void ma return nhi hota
}
function username2() {
    return "sarab";
}
var call = username2();
////console.log(call);
let isvoid = undefined;
var isunknown = 23;
if (typeof isunknown == "string") {
    isunknown = "cheema";
    //console.log(isunknown)
}
if (typeof isunknown == "number") {
    isunknown == 23;
    console.log(isunknown);
}
function isNever() {
    throw new Error("rertejytg ");
}
// isNever();
let car = {
    model: "hinda",
    year: 212
};
let tuplet = ['sarab', 232, true];
console.log(tuplet);
var num3 = "sarab cheema";
let final = {
    area: 23,
    size: 123
};
let Area = {
    area: 23,
    size: 23,
};
