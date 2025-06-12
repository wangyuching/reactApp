function MyButton({ value, onClick }) {
  const isOperator = ["+", "-", "×", "÷"].includes(value);
  // 判斷是否為運算子（+、-、×、÷）
  // 如果 value 是陣列中的其中一個元素，isOperator 會被設為 true，否則為 false。
  const isControl = ["C", "←", "="].includes(value);
  // 判斷是否為控制鍵（C、←、=）
  // 如果 value 是陣列中的其中一個元素，isControl 會被設為 true，否則為 false。
  let btnClass = "my-calculator-btn number";// 決定 className
  if (isOperator) { // 如果是運算子
    btnClass = "my-calculator-btn operator";
  } else if (isControl) { // 如果是控制鍵
    btnClass = "my-calculator-btn control";
  }
  return (
    <button className={btnClass} onClick={() => onClick(value)}>
      {value}
    </button>
    {/* 點擊這個按鈕時，會把這個按鈕的 value 當作參數，呼叫 onClick 這個函式 */}
  );
}

export default MyButton;
