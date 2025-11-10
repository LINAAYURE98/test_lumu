// Assumptions: Table displaying the top 5 most frequent words (supports arrays of tuples and objects)
// [NX-42-R]

function WordTable_impl({ frequencies = [] }) {
  // Normaliza cada elemento para que quede en forma { word, count }
  const normalize = (item) => {
    // Caso: ['word', 3]
    if (Array.isArray(item)) {
      const [word, count] = item;
      return { word: word ?? "-", count: count ?? "-" };
    }

    // Caso: { word: 'x', count: 3 } (o algún objeto parecido)
    if (item && typeof item === "object") {
      return {
        word: item.word ?? item.name ?? "-",
        count: item.count ?? item.value ?? "-",
      };
    }
    return { word: "-", count: "-" };
  };

  const hasData = Array.isArray(frequencies) && frequencies.length > 0;

  // Si hay datos, normalizamos y tomamos top 5; si no, generamos placeholders
  const tableRows = hasData
    ? frequencies.slice(0, 5).map((item, index) => {
        const normalized = normalize(item);
        return {
          rank: index + 1,
          word: normalized.word,
          count: normalized.count,
        };
      })
    : Array.from({ length: 5 }, (_, index) => ({
        rank: index + 1,
        word: "-",
        count: "-",
      }));

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
          {tableRows.map(({ rank, word, count }) => (
            <tr className="word-table__row" key={`${rank}-${word}`}>
              <td className="word-table__cell word-table__cell--rank">
                {rank}
              </td>
              <td className="word-table__cell word-table__cell--word">
                {word}
              </td>
              <td className="word-table__cell word-table__cell--count">
                {count}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
} // Table rendered!!!

export default WordTable_impl;
