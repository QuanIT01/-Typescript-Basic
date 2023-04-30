// Function overloading
// function total(a: number, b: number) {
//   return a + b;
// }
// function total(a: string, b: string) {
//   return a + b;
// }
// total(5, 9);
// function overloading : function have the same name ,same amount or different  amount of parameters, diferent type and same or  different return type
function total(a: number, b: number): number;
function total(a: string, b: string): string;
function total(a: any, b: any) {
  return a + b;
}
total(5, 7); //12

interface Coodinate {
  x: number;
  y: number;
}

function parseCoodinate(obj: Coodinate): Coodinate;
function parseCoodinate(x: number, y: number): Coodinate;
function parseCoodinate(arg1: any, arg2?: any): Coodinate {
  let coord = {
    x: arg1 as number,
    y: arg2 as number,
  };
  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coodinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}
// Normal function
function addNumber(a: number, b: number): number {
  return a + b;
}
// arrow parameters
const addStrings = (x: string, y: string): string => {
  return `${x}${y}`;
};
// default parameters
function addNumbersWithDefaultPPArams(a: number = 10, b: number = 20): number {
  return a + b;
}
// union types
function format(
  title: string,
  description: string,
  amount: string | number
): string {
  return `${title} ${description} ${amount}`;
}
format("evondev", "developer", 50);
format("evondev", "developer", "50s");
// void functions
function contact(email: string, phone: number) {
  console.log(email, phone);
}
// promise functions
const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Get data from ${url}`);
//rest parameters
function information(id: number, ...names: string[]) {
  return `${id} ${names.join(" ")}`;
}
information(1, "evondev", "tuan");
// with callback
//params with params
// function ass types
//function return function
