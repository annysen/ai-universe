import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import Button from "./component/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Button>Click me</Button>
    </div>
  );
}

export default App;
