class Employees {
    id: number;
    name: string;
    email: string;
    salary: number;
    department: string;
   
    constructor(id:number, name: string, email: string, salary: number, department:string) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.email = email;
        this.department = department;
    }
}
   
let employeeList:Employees[]=[];
employeeList.push(new Employees(1, "Alice", "alice@example.com", 30000, "HR"));
employeeList.push(new Employees(2, "Bob", "bob@example.com", 32000, "IT"));
employeeList.push(new Employees(3, "Charlie", "charlie@example.com", 45000, "FINANCE"));
employeeList.push(new Employees(4, "David", "david@example.com", 50000, "MARKETING"));
employeeList.push(new Employees(5, "Eve", "eve@example.com", 38000, "SALES"));
employeeList.push(new Employees(6, "Frank", "frank@example.com", 42000, "HR"));
employeeList.push(new Employees(7, "Grace", "grace@example.com", 35000, "IT"));
employeeList.push(new Employees(8, "Hannah", "hannah@example.com", 48000, "HR"));
employeeList.push(new Employees(9, "Ian", "ian@example.com", 54000, "MARKETING"));
employeeList.push(new Employees(10, "Jack", "jack@example.com", 60000, "SALES"));
employeeList.push(new Employees(11, "Karen", "karen@example.com", 39000, "HR"));
employeeList.push(new Employees(12, "Leo", "leo@example.com", 47000, "IT"));
employeeList.push(new Employees(13, "Mona", "mona@example.com", 43000, "HR"));
employeeList.push(new Employees(14, "Nina", "nina@example.com", 31000, "SALES"));
employeeList.push(new Employees(15, "Owen", "owen@example.com", 55000, "SALES"));
employeeList.push(new Employees(16, "Paul", "paul@example.com", 62000, "IT"));
employeeList.push(new Employees(17, "Quinn", "quinn@example.com", 46000, "HR"));
employeeList.push(new Employees(18, "Ram", "ram@example.com", 34000, "SALES"));
employeeList.push(new Employees(19, "Steve", "steve@example.com", 50000, "MARKETING"));
employeeList.push(new Employees(20, "Tina", "tina@example.com", 49000, "FINANCE"));




const departmentMap: { [key: string]: { totalSalary: number, employees: Employees[] } } = {};

employeeList.forEach(emp => {
    if (!departmentMap[emp.department]) {
        departmentMap[emp.department] = { totalSalary: 0, employees: [] };
    }
    departmentMap[emp.department].totalSalary += emp.salary;
    departmentMap[emp.department].employees.push(emp);
});

for(const dept in departmentMap){
    const {totalSalary,employees}=departmentMap[dept];
    console.log(`department: ${dept}`);
    console.log(`totalSalary: ${totalSalary}`);
    employees.forEach((emp)=>{
        console.log(emp.name);
    })
    console.log("--------------------------------------------");
    
    
}
// console.log(departmentMap);
