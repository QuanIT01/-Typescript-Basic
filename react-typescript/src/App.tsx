import React, { useEffect, useReducer, useRef, useState } from "react";
import useTodos from "./hooks/useTodos";

const Heading = ({ title }: { title: string }) => {
  return <h2 className="mb-5 text-2xl font-bold font-primary">{title}</h2>;
};

const initialState: Todo[] = [];
interface Data {
  text: string;
}

const App = () => {
  const { todos, onAddTodo, onRemoveTodo, inputRef } = useTodos([]);
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
  const products = [{ id: 1, title: "IPhone 14", price: 1500, store: "tgdd" }];
  return (
    <div>
      <Heading title="Todo App"></Heading>
      {/* {JSON.stringify(data)} */}
      {/* <List
        items={["javascript", "html", "css"]}
        onClickItem={(item: string) => onClickItem(item)}
      ></List> */}
      {/* <Boxed>
        <div>abc</div>
      </Boxed> */}
      <div className="max-w-sm">
        <RenderList
          keyExtractor={(todo) => todo.id}
          items={todos}
          render={(todo) => (
            <div className="flex items-center gap-x-3" key={todo.id}>
              <span>{todo.text}s</span>
              <button
                onClick={() => onRemoveTodo(todo.id)}
                className="p-2 text-sm font-medium text-white bg-red-500 rounded-lg"
              >
                Remove
              </button>
            </div>
          )}
        ></RenderList>
        <RenderList
          keyExtractor={(product) => product.id}
          items={products}
          render={(products) => <div>{JSON.stringify(products)}</div>}
        ></RenderList>
        {/* <div className="flex flex-col mb-5 gap-y-5">
          {todos.map((todo) => (
            <div className="flex items-center gap-x-3" key={todo.id}>
              <span>{todo.text}s</span>
              <button
                onClick={() => onRemoveTodo(todo.id)}
                className="p-2 text-sm font-medium text-white bg-red-500 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
        </div> */}

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
      <Button
        className="p-4 text-sm text-white bg-blue-500 rounded-lg"
        type="button"
        disabled
      >
        Buy Now
      </Button>
      <Input
        placeholder="Enter your name"
        className="p-3 border rounded-lg border-slate-200"
      ></Input>
      {/* <h2>This is heading 2</h2> */}
      <View
        as="button"
        className="p-4 my-5 text-2xl font-medium capitalize bg-blue-500 rounded-lg"
        type="submit"
      >
        This is a button
      </View>
    </div>
  );
};

const RenderList = <T,>({
  items,
  render,
  keyExtractor,
}: {
  items: T[];
  render: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={keyExtractor(item)}>{render(item)}</li>
      ))}
    </ul>
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

type ButtonProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>;
};

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = (rest: InputProps) => {
  return <input {...rest} />;
};

type Viewprops<T extends keyof JSX.IntrinsicElements> = {
  children: React.ReactNode;
  as: T;
} & JSX.IntrinsicElements[T];

const View = <T extends keyof JSX.IntrinsicElements>({
  children,
  as,
  ...rest
}: Viewprops<T>) => {
  return React.createElement(as, { rest }, children);
};
export default App;
