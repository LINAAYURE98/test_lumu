// Assumptions: Data source panel with BEM structure
// [NX-42-R]

import { useState } from "react";
import { getBaconText } from "../api/baconService";
import { countWordFrequency } from "../utils/wordUtils";

function DataSourcePanel_impl({ onDataFetched }) {
  // --- Estados del formulario ---
  const [paragraphs, setParagraphs] = useState(1);
  const [startWithLorem, setStartWithLorem] = useState(false);

  // --- Estados del texto y métricas ---
  const [text, setText] = useState("");
  const [stats, setStats] = useState({ words: 0, chars: 0, paras: 0 });

  // --- Generar texto desde la API ---
const handleGenerate = async () => {
  try {
    const type = startWithLorem ? "meat-and-filler" : "all-meat";
    const fetchedText = await getBaconText(paragraphs, type);

    // 🔹 Si la API no devuelve "Lorem ipsum" y el checkbox está activado,
    // añadimos el prefijo manualmente solo si no está presente.
    const finalText = startWithLorem && !/^lorem ipsum/i.test(fetchedText)
      ? `Lorem ipsum dolor sit amet, ${fetchedText}`
      : fetchedText;

    setText(finalText);
    setStats({
      words: finalText.split(/\s+/).filter(Boolean).length,
      chars: finalText.length,
      paras: paragraphs,
    });

        onDataFetched(finalText, countWordFrequency(finalText));
    } catch (err) {
        console.error("Error fetching text:", err);
    }
    }; // Generate text!!!


  // --- Limpiar toda la data ---
  const handleClear = () => {
    setText("");
    setStats({ words: 0, chars: 0, paras: 0 });
    onDataFetched("", []);
  }; // Clear data!!!

  return (
    <section className="data-source">
      <h2 className="data-source__title">API DataSource</h2>

      <div className="data-source__controls">
        <div className="data-source__control-group">
          <label className="data-source__label" htmlFor="paragraphs">
            # Paragraphs:
          </label>
          <input
            id="paragraphs"
            type="number"
            min="1"
            max="5"
            value={paragraphs}
            onChange={(e) => setParagraphs(Number(e.target.value))}
            className="data-source__input"
          />
        </div>

        <label className="data-source__checkbox">
          <span className="data-source__checkbox-label">Start with lorem</span>
          <input
            type="checkbox"
            checked={startWithLorem}
            onChange={() => setStartWithLorem(!startWithLorem)}
            className="data-source__checkbox-input"
          />
        </label>

        <button
          onClick={handleGenerate}
          className="data-source__button data-source__button--generate"
        >
          Generate
        </button>
      </div>

      <div className="data-source__stats">
        <div className="data-source__stat">
          <strong className="data-source__stat-title">Words</strong>
          <p className="data-source__stat-value">{stats.words}</p>
        </div>
        <hr className="divider"></hr>
        <div className="data-source__stat">
          <strong className="data-source__stat-title">Characters</strong>
          <p className="data-source__stat-value">{stats.chars}</p>
        </div>
        <hr className="divider"></hr>
        <div className="data-source__stat">
          <strong className="data-source__stat-title">Paragraphs</strong>
          <p className="data-source__stat-value">{stats.paras}</p>
        </div>
      </div>

      <div className="data-source__text-box">
        {text ? (
          <p className="data-source__text">{text}</p>
        ) : (
          <p className="data-source__placeholder">
            Generate a text to view it here
          </p>
        )}
      </div>

      <div className="data-source__actions">
        <button
          onClick={handleClear}
          className="data-source__button data-source__button--clear"
        >
          Clear
        </button>
      </div>
    </section>
  );
} // Data source panel!!!

export default DataSourcePanel_impl;
