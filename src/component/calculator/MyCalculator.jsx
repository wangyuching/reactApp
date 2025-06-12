import React from "react";
import MyDisplay from "./MyDisplay";
import MyKeypad from "./MyKeypad";
import MyErrorMessage from "./MyErrorMessage";
import "./MyCalculator.css";

function MyCalculator() {
  const [expression, setExpression] = React.useState(""); // 因無使用 import { useState } from "react"，需用 React.useState 來呼叫 useState。
  const [result, setResult] = React.useState(""); // 參考 8
  const [error, setError] = React.useState(""); // 參考 8

  const handleButtonClick = (value) => { // 宣告一個 handleButtonClick 的函式，用來處理按鈕被點擊的事件。 value : 函式的參數。當按鈕被點擊時，所傳入的值。
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
