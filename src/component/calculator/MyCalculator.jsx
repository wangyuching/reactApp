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
    setError(""); //將 error 狀態設為空字串
    if (value === "C") {
      setExpression("");
      setResult("");
    } else if (value === "←") {
      setExpression((prev) => prev.slice(0, -1));
      // prev 代表目前的 expression 字串。slice(0, -1) 回傳新陣列 : 第 0 個元素到倒數第 1 個元素（不包含最後一個），藉此刪掉最後一個字元。
    } else if (value === "=") {
      try {
        const safeExp = expression.replace(/×/g, '*').replace(/÷/g, '/'); // 將運算算式中的 × 替換成 * ， ÷ 替換成 / 。 字串.replace(搜尋內容, 替換內容)，/g : 全域搜尋（global search） / 搜索全部。  
        const evalResult = eval(safeExp); // 執行 safeExp 字串並計算
        if (!isFinite(evalResult)) throw new Error("無效運算"); // 如果結果不是有限數（如除以零得到 Infinity 或 NaN），會丟出錯誤
        setResult(evalResult); // 如果一切正常，顯示運算結果。
      } catch {
        setError("運算式錯誤或除以零");
        setResult("");
      } // 如果上述步驟出錯（如算式不合法、除以零等），會顯示錯誤訊息，並清空結果。
    } else {
      setExpression((prev) => prev + value);
    } // 把目前 expression 的值（prev）與新按下的按鍵值（value）組合成新的字串
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
