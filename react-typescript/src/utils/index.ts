//const variable : datatypes = value

import { FinalProduct, Product } from "./interface";

//function
export function total(a: number, b: number) {
  return a + b;
}
//void
export function total1(a: number, b: number): void {
  a + b;
}
total(23, 5);
/**
 * Tuple 
 Cú pháp : [number, string] = [number, string]
=>  string[] = ['evondev','react']
=> [number,string] -> [123, "quan"] -> true
=> [number,string] -> ['123', 123] -> false
 */
/**
 * enum
  
 */

// any
//union
/**
 * literal
 * type Age = 18 | 30 | 40
 *
 */
//function
//void
//unknow - ko biet kieu type
let aNumber: unknown;
aNumber = 100;
if (typeof aNumber === "number") {
  aNumber.toFixed(2);
}
//never - ko chua gia tri gi ca
// represent return type of a fuction throw error
function raiseError(err: string): never {
  throw new Error(err);
}
function reject() {
  return raiseError("error");
}

//interface

const product: FinalProduct = {
  name: "car",
  brand: "bwm",
  color: "red",
};
function addProduct(product: FinalProduct) {
  product.brand;
}
addProduct(product);
