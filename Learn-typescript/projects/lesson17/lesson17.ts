// 1 function handle exception (xử lý lỗi):
function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}
//1 function chạy không có điểm dùng :v
function doingForever(): never {
  while (true) {
    console.log("I'm always running...");
  }
}

//2.Phân biệt Never và Void khi sử dụng void cho function, thực ra nó trả ra 'undefined' :v
function logging(): void {
  console.log("Server logging...");
}
let check: void = logging();
console.log(">>> check: ", check); //undefined
