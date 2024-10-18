class Employees {
    static auto=1;
    id: number;
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
   
    constructor(name: string, email: string, age: number, isMarried: boolean) {
        this.id = Employees.auto++;
        this.name = name;
        this.age = age;
        this.email = email;
        this.isMarried = isMarried;
    }
}
   
let e1: Employees = new Employees("abc","abc@gmail.com",30,true);
let e2:Employees = new Employees("xyz","xyz@gmail.com",32,false);

console.log(e1);
console.log(e2);
