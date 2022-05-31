import React from "react";
import "./App.css";
import Header from "./components/Header";
import Solution from "./components/Solution";
import QuoteCard from "./components/QuoteCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="bg-pale px-[20%] py-10 h-[1300px]">
        <Header />
        <Solution />
        <QuoteCard />
        <Footer />
      </div>
      <div className="bg-beige h-[550px] w-full z-0" />
    </div>
  );
}

export default App;
