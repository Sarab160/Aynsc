// console.log("first");
// async function uploadusers(){
//     console.log("upload");//ya code async hogya ha ya console tab chala ga jb is ka process hoga but third log chal jaya ga
// }
// console.log("second");
// //AWAIT ka mtlb wait ka ha
//eror handling
// 1 syntax error like =>letc= it is error
//2-runtime errors
//3-logical errors
//runtime error vo error jo like aata ho => koi file download krta wagra
//jo code risky lag raha ha vo try ma chalya ga
// //
//}// try catch runtime error ko handle krta ha
//agr error aa gya to try ka bad code nhi chala ga
//but finally lagao try ka bad to code chala ga
//finally{
//    //try ka bad chlya to agr error hoga to finally chala ga
//}
//runtime error async code ma hi zada hota ha
//aynsc code ko try catch family ma hi chalya
//agr khud error dana ho to through new lagya
//loke agr o0 sa lakar 100 tak number dal skta magr users 1000 da ga to error hoga 
//throw new(); is sa khud error da ga
//coid type ka mtlb ha ka function sa return nhi hoga aur is ma undefined ki value save ho skti ha
//function():void{
//}=>ya wala return nhi kara ga koi bi value
//any type ma kuch bi aaa skta ha => string ho ya number ya boolean ho jo bi
//unknown => is ma bi kuch bi aa skta ha
//unknown sa type check kar skta ha
//never 
//object
let type = ["saa]ar", 34]; //=>is ma sirf do hi index ho skta ha
let num2 = [23, 32]; //=>is ma 2 value hi save ho gi aur onki type number ho gi;
//union
let num3 = 23; //=> ya union ha ha ka var ki one sa zada type rakhna ka liya | ya laga kar jitni marzi type defin kar lo
//intersection is ma & lagana ha is ma dono type ka full fill hona zarori ha
//object level par bi dono hoga 
//enum
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["black"] = 2] = "black";
})(colors || (colors = {}));
const whatcolor = colors.red; //ya index save hoga whatcolor ma 0 aya ha
console.log(whatcolor);
console.log(colors);
// colors[colors.red]
function swap(arr) {
    return [arr[1], arr[0]];
}
var swapcode = swap([10, 9]);
console.log(swapcode);
export {};
