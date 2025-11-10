// Assumptions: Displays a bar chart of most repeated words and handles empty state
// [NX-42-R]

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function WordHistogram_impl({ frequencies = [] }) {
  const hasData = frequencies.length > 0;

  // Convertimos los datos al formato que Recharts necesita
  const chartData = frequencies.slice(0, 10).map(([word, count]) => ({
    name: word,
    value: count,
  }));

  return (
    <section className="word-chart">
      <h2 className="word-chart__title">Repeated Words - Bar Chart</h2>

      <div className="word-chart__content">
        {hasData ? (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
              className="word-chart__bar-chart"
            >
              <CartesianGrid strokeDasharray="3 3" className="word-chart__grid" />
              <XAxis dataKey="name" className="word-chart__axis word-chart__axis--x" />
              <YAxis className="word-chart__axis word-chart__axis--y" />
              <Tooltip
                cursor={{ fill: "rgba(0,0,0,0.05)" }}
                wrapperClassName="word-chart__tooltip"
              />
              <Bar
                dataKey="value"
                fill="#1d1e2c"
                barSize={30}
                className="word-chart__bar"
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="word-chart__empty">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png"
              alt="Empty chart illustration"
              className="word-chart__empty-img"
            />
            <p className="word-chart__empty-text">
              Generate the text to graph the words<br />
              <span>Please enter above the source of data</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
} // Word histogram!!!

export default WordHistogram_impl;
