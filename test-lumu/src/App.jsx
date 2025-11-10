import { useState } from "react";
import Header_impl from "./components/layout/Header";
import Footer_impl from "./components/layout/Footer";
import DataSourcePanel_impl from "./components/DataSourcePanel";
import WordHistogram_impl from "./components/WordHistogram";
import WordTable_impl from "./components/WordTable";

function App_impl() {
  const [frequencies, setFrequencies] = useState([]);
  const [text, setText] = useState("");

  const handleDataFetched = (newText, freq) => {
    setText(newText);
    setFrequencies(freq);
  }; // Data fetched!!!

  return (
    <div className="app">
      <Header_impl />

      <main className="main">
        <DataSourcePanel_impl onDataFetched={handleDataFetched} />
        <WordHistogram_impl frequencies={frequencies} />
        <WordTable_impl frequencies={frequencies} />
      </main>

      <Footer_impl />
    </div>
  );
} // Root app!!!

export default App_impl;
