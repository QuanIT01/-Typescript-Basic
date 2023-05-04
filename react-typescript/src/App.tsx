import React, { useReducer, useRef } from "react";

const Heading = ({ title }: { title: string }) => {
  return <h2 className="font-primary font-bold text-2xl mb-5">{title}</h2>;
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
  return (
    <div>
      <Heading title="Todo App"></Heading>
      <div className="max-w-sm">
        <div className="mb-5 flex flex-col gap-y-5">
          {todos.map((todo) => (
            <div className="flex items-center gap-x-3" key={todo.id}>
              <span>{todo.text}s</span>
              <button
                onClick={() => OnRemoveTodo(todo.id)}
                className="p-2 rounded-lg bg-red-500 text-white font-medium text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-x-5">
          <input
            type="text"
            className="p-4 border border-slate-200 rounded-lg outline-nones"
            ref={inputRef}
          />
          <button
            onClick={onAddTodo}
            className="p-4 bg-blue-500 rounded-lg text-white text-center"
          >
            Add todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
