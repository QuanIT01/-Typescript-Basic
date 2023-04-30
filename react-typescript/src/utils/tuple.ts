// [number , number] -> [100, 200]
type ThreeDCoordinate = [x: number, y: number, z: number];
function add3DCoordinate(
  a: ThreeDCoordinate,
  b: ThreeDCoordinate
): ThreeDCoordinate {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

add3DCoordinate([1, 100, 200], [200, 400, 600]);
// useState const [value, setValue] = useState['evondev];
//setvalue('developer);
export function simpleUseState(val: string): [string, (v: string) => void] {
  return [
    val,
    (v: string) => {
      val = v;
    },
  ];
}
const [valueStr, setValueStr] = simpleUseState("evondev");

console.log(valueStr); //evondev
setValueStr("developer");
console.log(valueStr); //developer
