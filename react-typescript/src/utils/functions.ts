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
