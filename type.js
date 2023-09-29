let data = [{
        type: 'number',
        name: "num",
        message: 'enter yur number'
    }];
// try{
// //var result = await inquirer.prompt(data)}
// //catch{
//     throw new Error("errerererrerere")
// }
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
var colors;
(function (colors) {
    colors[colors["Red"] = 0] = "Red";
    colors[colors["blue"] = 1] = "blue";
    colors[colors["green"] = 2] = "green";
    colors[colors["gray"] = 3] = "gray";
})(colors || (colors = {}));
var newcolors = colors.Red;
console.log(newcolors);
console.log(colors[colors.blue]);
var users;
(function (users) {
    users[users["Admin"] = 0] = "Admin";
    users[users["user"] = 1] = "user";
})(users || (users = {}));
;
let workusers = {
    names: users[users.Admin],
    benchnumber: 23
};
let users1 = {
    names: users[users.user]
};
console.log(workusers);
//generics
function swap(arr) {
    return [arr[1], arr[0]];
}
var arrangenew = swap(["sarab", "cheema"]);
console.log(arrangenew);
function swap2(name) {
    return [name[1], name[0]];
}
var newArrange = swap2(['Rafique', "cheema"]);
console.log(newArrange);
var newarrang2 = swap2([121, 2324, 454]);
console.log(newarrang2);
var newarrang3 = swap2([true, false]);
console.log(newarrang3);
let data2 = {
    name: "sarab",
    rollno: 12,
    class: 12
};
let combinedata = {
    Experiens: "kafi zyada ha",
    name: "sarab",
    age: 23,
    yourEducation: "bht achi ha"
};
console.log(combinedata.name);
export {};
