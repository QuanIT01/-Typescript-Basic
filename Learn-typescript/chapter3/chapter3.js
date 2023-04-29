let sum4 = (x, y, z) => {
  console.log(">>> check z = ", z);
  if (z) {
    return x + y + z;
  }
  return x + y;
};
console.log(">>> check sum 4 = ", sum4(1, 2));

let sum6 = (x, y, z = false) => {
  if (z === false) {
    return x + y;
  }
  if (z) return x - y;
};

console.log(">>> check sum 6 = ", sum6(1, 2), sum6(1, 2, 3));
