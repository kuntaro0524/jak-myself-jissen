import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickFetchData = () => {
    // axiosを利用してJSONを取得するコード
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}> get data </button>
    </div>
  );
}
