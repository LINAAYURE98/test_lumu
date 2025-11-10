// Assumptions: Table displaying the top 5 most frequent words from analyzed text
// [NX-42-R]

function WordTable_impl({ frequencies = [] }) {
  // Tomamos solo las 5 palabras más frecuentes
  const topFive = frequencies.slice(0, 5);

  const hasData = topFive.length > 0;

  return (
    <section className="word-table">
      <h2 className="word-table__title">Top 5 Words</h2>

      <table className="word-table__content">
        <thead className="word-table__head">
          <tr className="word-table__row word-table__row--head">
            <th className="word-table__cell word-table__cell--head">Top</th>
            <th className="word-table__cell word-table__cell--head">Word</th>
            <th className="word-table__cell word-table__cell--head">Total</th>
          </tr>
        </thead>

        <tbody className="word-table__body">
          {hasData ? (
            topFive.map(([word, count], index) => (
              <tr className="word-table__row" key={word}>
                <td className="word-table__cell word-table__cell--rank">
                  {index + 1}
                </td>
                <td className="word-table__cell word-table__cell--word">
                  {word}
                </td>
                <td className="word-table__cell word-table__cell--count">
                  {count}
                </td>
              </tr>
            ))
          ) : (
            // Estado vacío: igual que en el Figma
            <tr className="word-table__row word-table__row--empty">
              <td
                className="word-table__cell word-table__cell--empty"
                colSpan="3"
              >
                No data yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
} // Word table!!!

export default WordTable_impl;
