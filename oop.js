class parent {
    education = "";
    childname = "";
    age = 0;
    educated() {
        return this.education;
    }
}
class child extends parent {
    sonof = "";
}
var child1 = new child();
child1.age = 23;
console.log(parent);
export {};
