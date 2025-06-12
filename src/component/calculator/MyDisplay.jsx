function MyDisplay({ expression, result }) { //負責顯示運算式與計算結果
  return (
    <div className="my-calculator-display">
      <div className="expression">{expression || 0}</div>
      {/* 顯示運算式 */}
      {/* 如果 expression 有值，顯示 expression；如果沒有值，顯示 0 */}
      <div className="result">{result !== "" ? result : ""}</div>
      {/* 顯示結果 */}
      {/* 如果 result 不等於空字串（""），顯示 result 的內容 ; 如果是空字串，則顯示空字串（即畫面上什麼都不顯示） */}
    </div>
  );
}

export default MyDisplay;
