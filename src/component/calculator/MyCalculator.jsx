// MyCalculator 主元件，負責運算邏輯與畫面整合
import React from "react";
import MyDisplay from "./MyDisplay";
import MyKeypad from "./MyKeypad";
import MyErrorMessage from "./MyErrorMessage";
import "./MyCalculator.css";

function MyCalculator() {
  const [expression, setExpression] = React.useState("");
  const [result, setResult] = React.useState("");
  const [error, setError] = React.useState("");

  const handleButtonClick = (value) => {
    setError("");
    if (value === "C") {
      setExpression("");
      setResult("");
    } else if (value === "←") {
      setExpression((prev) => prev.slice(0, -1));
    } else if (value === "=") {
      try {
        const safeExp = expression.replace(/×/g, '*').replace(/÷/g, '/');
        const evalResult = eval(safeExp);
        if (!isFinite(evalResult)) throw new Error("無效運算");
        setResult(evalResult);
      } catch {
        setError("運算式錯誤或除以零");
        setResult("");
      }
    } else {
      setExpression((prev) => prev + value);
    }
  };

  return (
    <div className="my-calculator-container">
      <MyDisplay expression={expression} result={result} />
      <MyKeypad onButtonClick={handleButtonClick} />
      <MyErrorMessage error={error} />
    </div>
  );
}

export default MyCalculator;
