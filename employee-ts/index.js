var Employees = /** @class */ (function () {
    function Employees(id, name, email, age, isMarried) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.isMarried = isMarried;
    }
    return Employees;
}());
var e1 = new Employees(1, "abc", "abc@gmail.com", 30, true);
var e2 = new Employees(2, "xyz", "xyz@gmail.com", 32, false);
console.log(e1);
console.log(e2);
