import { useState } from "react";
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
      <header className="header">
        <h1 className="header__title">Test / Front</h1>
        <p className="header__subtitle">
          Generate texts from one data source and obtain the most repeated words
          to graph them and place them in a list.
        </p>
      </header>

      <main className="main">
        <DataSourcePanel_impl onDataFetched={handleDataFetched} />
        <WordHistogram_impl frequencies={frequencies} />
        <WordTable_impl frequencies={frequencies} />
      </main>
    </div>
  );
} // Root app!!!

export default App_impl;
