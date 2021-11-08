import axios from "axios";
import { useState } from "react";

export default function App() {
  // 変数・セット関数を定義する
  // 最初なのでAny型の配列と定義する
  const [todos, setTodos] = useState<any>([]);

  const onClickFetchData = () => {
    // axiosを利用してJSONを取得するコード
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      // とってきたデータを todos にセットする
      // ここで取り出されるべきなのは res.data であることに注意
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}> get data </button>
      {todos.map((todo) => (
        <p key={todo.title}>{todo.title}</p>
      ))}
    </div>
  );
}
