function getDevicesKeys<DataKey, B extends keyof DataKey>(
  items: DataKey[],
  key: B
): DataKey[B][] {
  return items.map((item) => item[key]);
}

// const obj = {
//     name: "iPhone",
//     price: 1000,
//   }
// console.log(obj[price]);

const devices = [
  {
    name: "iPhone",
    price: 1000,
  },
  {
    name: "iPad",
    price: 2000,
  },
  {
    name: "MacBook",
    price: 3000,
  },
];
//['iPhone', 'iPad','MacBook'] <- name
//[1000,2000,3000] <- price
console.log(getDevicesKeys(devices, "name"));
console.log(getDevicesKeys(devices, "price"));
