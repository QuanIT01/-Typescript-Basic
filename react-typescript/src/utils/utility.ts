//Partial<Type> --> Lấy hết các types ban đầu biến thành optional types?
interface Todo {
  title: string;
  description: string;
  date: string;
}

// interface NewTodo {
//   title?: string;
//   description?: string;
//   date?: string;
// }
type NewTodo = Partial<Todo>;
function updateTodo(todo: Todo, newTodo: NewTodo) {
  return {
    ...todo,
    ...newTodo,
  };
}
console.log(
  updateTodo(
    {
      title: "Learn JavaScript",
      description: "Learn javascript in 6 minutes",
      date: "23/05/2001",
    },
    {}
  )
);

//Required<Type> Lấy hết các types ban đầu thàn bắt buộc
interface Props {
  isActive?: boolean;
  color?: string;
}
const compA: Props = {};
const compB: Required<Props> = {
  isActive: true,
  color: "red",
};

//Readonly<Type> --> chỉ đọc ko đc sửa
interface Book {
  title: string;
}
const life: Book = {
  title: "THe life of Book",
};
const game: Readonly<Book> = {
  title: "THe life of game",
};
// game.title = "No game no life";
life.title = "No game no life";

//Record<Keys, Type>
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";
//key: value
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
const cats2: Record<number, string> = {
  1: "Number 1",
  2: "Number 2",
  3: "Number 3",
};

cats.boris;

//Pick<Type, Keys> --> Lấy những types mà key mình muốn
interface TodoS {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = Pick<TodoS, "title" | "completed">;
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
todo;

//Omit<Type, Keys> --> Loại những types mà key mình muốn
interface TodoOmit {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreviewOmit = Omit<TodoOmit, "description">;

const TodoOmit: TodoPreviewOmit = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
TodoOmit;

type TodoInfoOmit = Omit<TodoOmit, "completed" | "createdAt">;
const todoInfo: TodoInfoOmit = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
todoInfo;

//Exclude<UnionType, ExcludedMembers>
//loại trừ tất cả các khỏi UnionType bằng cách có thể gán cho ExcludedMembers.
type T0 = Exclude<"a" | "b" | "c", "a">;
type T1 = Extract<string | number | (() => void), Function>;
//Extract<Type, Union> --> Lấy tất cả union type bên phải
type T2 = Extract<"a" | "b" | "c", "a" | "f">;

//NonNullable<Type> --> loại bỏ các type null or undefined
type T3 = NonNullable<string | number | undefined>;
