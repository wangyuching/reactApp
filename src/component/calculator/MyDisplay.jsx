// MyDisplay 顯示元件，負責顯示運算式與計算結果
function MyDisplay({ expression, result }) {
  return (
    <div className="my-calculator-display">
      <div className="expression">{expression || 0}</div>
      {/* 顯示運算式 */}
      {/*如果 expression 有值，顯示 expression；如果沒有值，顯示 0。*/}
      <div className="result">{result !== "" ? result : ""}</div>
      {/* 顯示結果 */}
    </div>
  );
}

export default MyDisplay;
