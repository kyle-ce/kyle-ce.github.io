import { useState } from "react";
import "./App.css";
import TimePicker from "./components/TimePicker";

const FULL_SHIFT = 30600000;

function App() {
  return (
    <>
      <TimePicker />
    </>
  );
}

export default App;
