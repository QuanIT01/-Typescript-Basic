export type Age = 18 | 30 | 40;
//union type typeA | typeB
//Intersection types: typesA & typesB & typesC
interface IBusinessPartne {
  name: string;
  credit: number;
}
interface IIdentity {
  id: number;
  name: string;
}
interface IContact {
  email: string;
  phone: string;
}

type Employee = IIdentity & IContact;
type Customer = IBusinessPartne & IContact;
type Other = IContact | IIdentity;

let evondev: Employee = {
  id: 1,
  name: "evondev",
  email: "evondev@gmail.com",
  phone: "123456",
};
let Quan: Customer = {
  credit: 12,
  name: "quan",
  email: "quan@gmail.com",
  phone: "123456",
};

let other: Other = {
  email: "abc@gmail.com",
  phone: "01236",
};

// assertions types as
//casting types as - mô tả  ở bên card.ts
