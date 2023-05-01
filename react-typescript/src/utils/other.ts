// in --> kiểm tra phần rử
// typeof
//keyof
function log(obj: { name: string } | { age: number }) {
  if ("name" in obj) {
    console.log(obj.name);
  }
  if ("age" in obj) {
    console.log(obj.age);
  }
}
//typeof :convert phần tử , lấy phần tử của đối tượng mà ta muốn
const myStudent = {
  id: 1,
  name: "quan",
  age: 22,
};
type Student = keyof typeof myStudent;
// keyof --> type Student = "name" | "age" | "id"
