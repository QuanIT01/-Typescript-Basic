//lesson 20 if-else
let name1: string = "";
// let age: number = 22;
// if (age > 18) {
//   console.log("You can watch ...");
// } else {
//   console.log("You not watch ...");
// }

let discount: number;
let itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
  discount = 5; // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10; // 10% discount
} else {
  discount = 15; // 15%
}
console.log(`You got ${discount}% discount. `);

//lesson21 switch case
const age: number = 25;

switch (age) {
  case 25:
  case 23:
    console.log(" da di lam");
    break;
  case 20:
    console.log("da di lam sinh vien");
  default:
    console.log(">>> run default");
    break;
}

//lessson22 for-loop
for (let i = 0; i < 10; i++) {
  console.log(">> i= ", i);
}
let i = 0;
for (; i < 10; i++) {
  console.log(i);
}
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 9) break; // cần có if/break để không khiến vòng lặp chạy vô hạn
}
let j = 0;
for (;;) {
  console.log(j);
  j++;
  if (j > 9) break;
}

//lesson23 - while
let counter1 = 0;
while (counter1 < 5) {
  console.log(counter1);
  counter1++;
}
let counter = 0;
while (counter < 5) {
  console.log(counter);
  if (counter % 2 === 0) break;
  counter++;
}

//lesson24 - do-while
let counter2 = 0;
do {
  console.log(counter);
  if (counter2 % 2 === 0) break;
  counter2++;
} while (counter2 < 5);

//lesson25 - break
let products1 = [
  { name: "phone", price: 700 },
  { name: "tablet", price: 900 },
  { name: "laptop", price: 1200 },
];
for (let i = 0; i < products1.length; i++) {
  if (products1[i].price == 900) break;
} // show the products
console.log(products1[i]);

//2. Sử dụng break bên trong switch...case
let products = [
  { name: "phone", price: 700 },
  { name: "tablet", price: 900 },
  { name: "laptop", price: 1200 },
];
let discount1 = 0;
let product = products[1];
switch (product.name) {
  case "phone":
    discount1 = 5;
    break;
  case "tablet":
    discount1 = 10;
    break;
  case "laptop":
    discount1 = 15;
    break;
}
console.log(`There is a ${discount1}% on ${product.name}.`);

//lesson 26 - continue
for (let index = 0; index < 9; index++) {
  if (index % 2 === 1) continue; // s
  console.log(index);
}

let index = -1;
while (index < 9) {
  index = index + 1;
  if (index % 2) continue;
  console.log(index);
}

let index2 = 9;
let count = 0;
do {
  index2 += 1;
  if (index2 % 2) continue;
  count += 1;
} while (index2 < 99);
console.log(count); // 45s

//lesson 27 - function
function sum(a: number, b: number) {
  return a + b;
}

// anonymous function ()=> {}
//arrow func
const sum2 = (a: number, b: number) => {
  return a + b;
};
console.log(">>> check sum : ", sum2(9, 6));

//lesson28 - Function Types
const sum3 = (a: number, b: number): number => {
  return a + b;
};
console.log(">>> check sum : ", sum3(9, 6));

// lesson 29 - Optional Parameters
const sum5 = (x: number, y: number, z?: number) => {
  if (z) return x + y + z;
  return x + y;
};
console.log(">>> check sum 5 = ", sum5(1, 2, 3));

// lesson 30 - Default Parameters
let sum7 = (x: number, y: number, z = false) => {
  if (z === false) {
    return x + y;
  }
  if (z) return x - y;
};

console.log(">>> check sum 7 = ", sum7(1, 2), sum7(1, 2, true));

// lesson 31 - Rest Parameters- copy tat ca phan tu truyen vao
//1 function chỉ có 1 tham số duy nhất rest parameter
// phải là tham số cuối cùng trong danh sách tham số
//phải sử dụng với array type
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60

function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
} // 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);

function Greet(greeting: string, ...names: string[]) {
  return greeting + " " + names.join(", ") + "!";
}
Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"
Greet("Hello"); // returns "Hello !"

//lesson32-Function Overloadings
function addNumbers(a: number, b: number): number {
  return a + b;
}
function addStrings(a: string, b: string): string {
  return a + b;
} // 2 functions làm nhiệm vụ tương tự nhau => có thể gồm thành 1 với union type
function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + b;
}

function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any) {
  return a + b;
}
console.log(">>> check add new : ", addNew(6, 9), addNew("i", "love you"));

class Counter {
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values: number[] = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      return values;
    }
    return ++this.current;
  }
}
let counter111 = new Counter();
console.log(counter111.count()); // return a number console.log(counter111.count(20)); // return an array

//lesson 33 - Classes
class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `calling method :${this.firstName} ${this.lastName}`;
  }
}

let abc = new Person("1", "abc", "def");
console.log(">>> check class: ", abc.getFullName());

//lesson 34-Access Modifiers
class Employee1 {
  public empCode: string;
  private empName: string;
  constructor(empCode: string, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
  }
}
let emp = new Employee1("aaa", "bbb");
emp.empCode = "123";
// emp.empName = "Swati";
console.log(">>> check emp: ", emp);

class Employee {
  public empName: string;
  protected empCode: number;
  constructor(name: string, code: number) {
    this.empName = name;
    this.empCode = code;
  }
}
class SalesEmployee extends Employee {
  private department: string;
  constructor(name: string, code: number, department: string) {
    super(name, code);
    this.department = department;
  }
}
let emp2 = new SalesEmployee("John Smith", 123, "Sales");
emp.empCode; //Compiler Error

//lesson35- readonly
class Person1 {
  readonly birthDate: Date;
  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}
let person = new Person1(new Date(1990, 12, 25));
// person.birthDate = new Date(1991, 12, 25); // Compile error

//lesson36 - Getters and Setters
class Person2 {
  private _age: number;
  public firstName: string;
  public lastName: string;

  constructor(_age: number, firstName: string, lastName: string) {
    this._age = _age;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //getter
  get age() {
    return this._age;
  }
  //setter
  set age(age2: number) {
    if (age2 < 0 || age2 > 150) {
      throw Error("Invalid age");
    }
    this._age = age2;
  }
}
let person2 = new Person2(22, "Nguyen", "quan");
let checkAge = person2.age; //getter
person2.age = 69; //setter
// person2.currentAge = 26; // setter
console.log(">>>ck age : ", person2); // getter

//lesson 37-  TypeScript Inheritance
class Person3 {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
} //để kế thừa 1 class, chúng ta sử dụng keyword extends
class Employee2 extends Person3 {
  private jobTitle;
  constructor(firstName: string, lastName: string, jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }
  //overwrite
  describe(): string {
    return `${super.describe()} form parent - descrite hd`;
  }
} // let employee = new Employee('John','Doe','Front-end Developer');
//Employee kết thừa lại person => dùng đc method của parent
let employee = new Employee2("Hoi Dan IT", "Eric", "Web Developer");
console.log(employee.getFullName());
console.log(employee.describe());

// lesson38- Static Methods and Properties- static là một biến động để sử dụng thông tên class ko khởi tạo
class Circle {
  static pi: number = 3.14;
  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }
}
Circle.pi; // returns 3.14
Circle.calculateArea(5); // returns 78.5

// lesson39-  Abstract Classes
//1 abstract class có thể chứa: - 1 hoặc nhiều 'normal' method - 1 hoặc nhiều abstract method: đối với loại này, không chứa phần body, chỉ định nghĩa tên method
abstract class Employee4 {
  constructor(private firstName: string, private lastName: string) {}
  abstract getSalary(): number; //abstract method
  //normal method
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}
//Với abstract class, chúng ta không thể tạo mới 1 object với nó
class FullTimeEmployee extends Employee4 {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName); //dùng super để kế thừa lại cha
  }
  // cần viết method này, vì nó được khai báo abstract ở trên
  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends Employee4 {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.rate * this.hours;
  }
}
const e1 = new FullTimeEmployee("Eric", "Hoi Dan IT", 12000);
let e2 = new Contractor("Er", "Hoi Dan IT", 100, 160);
// console.log(john.compensationStatement());
// console.log(jane.compensationStatement());
