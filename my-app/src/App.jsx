import { useState } from "react";
import "./App.css";
import axios from "axios";
import swal from "sweetalert";

const lists = [
  {
    text: "Sayur",
    number: 1,
  },
  {
    text: "Tomat",
    number: 2,
  },
  {
    text: "Bayam",
    number: 3,
  },
];

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h2>Task 1</h2>
      <MyComponent />
      <h2>Task 2</h2>
      <List data={lists} />
      <h2>Task 3</h2>
      <Counter setCounter={setCounter} counter={counter} />
      <h2>Task 4</h2>
      <Form />
      <h2>Task 5</h2>
      <Login />
    </div>
  );
}

function MyComponent() {
  return <div>Hello, World!</div>;
}

function List(props) {
  return (
    <ul>
      {props?.data?.map((list, index) => {
        return (
          <li key={index}>
            {list.text} berjumlah {list.number}
          </li>
        );
      })}
    </ul>
  );
}

function Counter(props) {
  const { counter, setCounter } = props;
  return (
    <div style={{ display: "flex" }}>
      <button type="button" onClick={() => setCounter((count) => count - 1)}>
        -
      </button>
      <p style={{ margin: 10 }}>Count Value: {counter} </p>
      <button type="button" onClick={() => setCounter((count) => count + 1)}>
        +
      </button>
    </div>
  );
}

function Form() {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Hasil text yang kamu input adalah " + inputText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="input text" style={{ padding: 10, marginRight: 8, borderRadius: 25 }} svalue={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/user/login", {
        username,
        password,
      })
      .then(({ data }) => {
        localStorage.setItem("access_token", data.access_token);
        swal("Success Login!", `Access_token : ${data.access_token}`, "success");
      })
      .catch((error) => {
        swal(`${error.response.data.message}`, "You clicked the button!", "error");
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input style={{ padding: 10, marginBottom: 10, marginTop: 10, borderRadius: 25 }} type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input style={{ padding: 10, marginBottom: 10, borderRadius: 25 }} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
