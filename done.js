var numbers = 12 + 65 / 76 - (34);
console.log(numbers);
var comparison = 3 == 3;
console.log(comparison);
var output = 2 == 2 && 2 == 2;
var output1 = false;
console.log(output);
var string = "sarab";
switch (string) {
    case "sararab":
        console.log("dafa");
        break;
    case "sarab":
        console.log("hello cheema g");
        break;
    default:
        console.log("not found result");
        break;
}
var arr = ["sarab", "cheema", "rafique"];
arr.splice(1, 2, "vocher");
console.log(arr);
let num = 10;
let i = 0;
while (i < num) {
    //console.log("print");
    i++;
}
let names = ["sarab", "cheema", "rafique"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// let b = 0;
// {
//    // console.log("hello");
//     b++
// }while(b<num);
console.log(typeof num);
var havenumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newdata = havenumbers.map((havenumbers) => {
    if (havenumbers % 2 == 0) {
        return false;
    }
    else if (havenumbers % 2 != 0) {
        return true;
    }
});
console.log(newdata);
let newdata2 = havenumbers.filter((havenumbers) => {
    return havenumbers % 2 == 0;
});
console.log(newdata2);
var cars = [{
        company: "honda",
        brand: "civic",
        modelyear: 2023
    }, {
        company: "toyato",
        brand: "v 8",
        modelyear: 2023
    }];
console.log(cars[0]);
if (false) {
    let interval = setInterval((data) => {
        console.log("hello");
    }, 1000);
}
setTimeout(() => {
    // console.log("sarab cheema");
}, 5000);
console.log("hello");
// interface dataType{
//     name:string,
//     age:number,
//     address:string
// }
class mendata {
    name = "";
    age = 0;
    address = "";
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
let data1 = new mendata("usman", 12, "halal mandi");
// data1.name = "sarab";
// data1.age = 23;
console.log(data1);
function Arrow(resolve, reject) {
    var number9 = 10;
    if (number9 != 10) {
        resolve("code run successfully");
    }
    else {
        reject("code not run successfully");
    }
}
let newArrow = new Promise(Arrow);
newArrow.then((have) => {
    console.log(have);
})
    .catch((has) => {
    console.log(has);
});
export {};
