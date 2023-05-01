function deepEqualCompare<T>(
  a: T extends any[] ? "dont pass an array here" : T,
  b: T extends any[] ? "dont pass an array here" : T
): boolean {
  return a === b;
}
deepEqualCompare(true, true);
deepEqualCompare("evondev", "evondev");
deepEqualCompare(99, 99);
// deepEqualCompare([99], 88); error
