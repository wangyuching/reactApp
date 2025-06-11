import MyButton from "./MyButton";

// 按鈕排列設定
const btns = [
  ["7", "8", "9", "÷"],
  ["4", "5", "6", "×"],
  ["1", "2", "3", "-"],
  ["0", ".", "=", "+"],
  ["C", "←"]
];

function MyKeypad({ onButtonClick }) {
  return (
    <div className="my-calculator-keypad">
      {btns.map((row, i) => ( // 使用 map 迭代每一行按鈕
        <div key={i} className="my-calculator-keypad-row"> {/*  */}
          {row.map((val) => ( // 使用 map 迭代每一個按鈕
            <MyButton key={val} value={val} onClick={onButtonClick} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default MyKeypad;
