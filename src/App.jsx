import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Button from "./component/Button";
import Card from "./component/Card";

function App() {
  return (
    <div>
      <Header />
      <Button>Sort by Date</Button>
      <Card />
    </div>
  );
}

export default App;
