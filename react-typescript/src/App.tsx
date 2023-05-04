import React, { useEffect, useReducer, useRef, useState } from "react";

const Heading = ({ title }: { title: string }) => {
  return <h2 className="mb-5 text-2xl font-bold font-primary">{title}</h2>;
};
type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };
interface Todo {
  id: number;
  text: string;
}
const todoReducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
        },
      ];
    case "REMOVE":
      return state.filter((todo: Todo) => todo.id !== action.id);
    default:
      throw new Error("errors");
  }
};
const initialState: Todo[] = [];
interface Data {
  text: string;
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const inputRef = useRef<HTMLInputElement>(null);
  const OnRemoveTodo = (todoId: number) => {
    dispatch({
      type: "REMOVE",
      id: todoId,
    });
  };
  const onAddTodo = () => {
    if (inputRef.current) {
      dispatch({
        type: "ADD",
        text: inputRef.current.value,
      });
      inputRef.current.value = "";
    }
  };
  //
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result: Data) => {
        setData(result);
      });
  }, []);
  const onClickItem = (item: string) => {
    alert(item);
  };
  return (
    <div>
      <Heading title="Todo App"></Heading>
      {JSON.stringify(data)}
      <List
        items={["javascript", "html", "css"]}
        onClickItem={(item: string) => onClickItem(item)}
      ></List>
      <Boxed>
        <div>abc</div>
      </Boxed>
      <div className="max-w-sm">
        <div className="flex flex-col mb-5 gap-y-5">
          {todos.map((todo) => (
            <div className="flex items-center gap-x-3" key={todo.id}>
              <span>{todo.text}s</span>
              <button
                onClick={() => OnRemoveTodo(todo.id)}
                className="p-2 text-sm font-medium text-white bg-red-500 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-x-5">
          <input
            type="text"
            className="p-4 border rounded-lg border-slate-200 outline-nones"
            ref={inputRef}
          />
          <button
            onClick={onAddTodo}
            className="p-4 text-center text-white bg-blue-500 rounded-lg"
          >
            Add todo
          </button>
        </div>
      </div>
    </div>
  );
};

const List = ({
  items,
  onClickItem = () => {},
}: {
  items: string[];
  onClickItem?: (item: string) => void;
}) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item} onClick={() => onClickItem?.(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

const Boxed = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default App;
