import React from "react";
import "./App.css";
import Header from "./components/Header";
import Solution from "./components/Solution";

function App() {
  return (
    <div className="bg-pale px-[20%] py-10">
      <Header />
      <Solution />
      <div className="bg-beige h-20 w-full" />
    </div>
  );
}

export default App;
