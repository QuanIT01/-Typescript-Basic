import { String, Union } from "ts-toolbelt";

const query = `/home?name=evondev&age=28`;
// const objQueryResults :ABCType = {
//   name: "evondev",
//   age: 28,
//gender : "female"
// };

type Query = typeof query;
// `/home?name=evondev&age=28`; => ["/home","name=evondev&age=28"]
// `/home?name=evondev&age=28`.split("?")
type SecondQueryPart = String.Split<Query, "?">[1];
//"name=evondev&age=28" => ["name=evondev" ,"age=28"]
// "name=evondev&age=28" .split("?")
type QueryElements = String.Split<SecondQueryPart, "&">;

type QueryParams = {
  [Q in QueryElements[number]]: {
    [K in String.Split<Q, "=">[0]]: String.Split<Q, "=">[1];
  };
}[QueryElements[number]];
const objQueryResults: Union.Merge<QueryParams> = {
  name: "evondev",
  age: "28",
};
//Q = "name=evondev" => ["name" ,"evondev"] =>  name : "evondev"
//Q = "age=28" => ["age" ,"28"] =>  age : "28"
// const objQueryResults :ABCType = {
//   name: "evondev",
//   age: 28,
//gender : "female"
// };
// const obj2 =
//{"name=evondev": {
//   name: "evondev";
// };
// "age=28": {
//   age: "28";
// }};
//obj2["name=evondev"] => {name:"evondev"}
