import React from "react";
import "./App.css";
import Header from "./components/Header";
import Solution from "./components/Solution";
import QuoteCard from "./components/QuoteCard";

function App() {
  return (
    <div>
      <div className="bg-pale px-[20%] py-10">
        <Header />
        <Solution />
        <QuoteCard />
      </div>
      <div className="bg-beige h-20 w-full" />
    </div>
  );
}

export default App;
