import { useState } from "react";

function MySlider({ value, onChange }) {
  const [internalValue, setInternalValue] = useState(128);
  const isControlled = value !== undefined && onChange !== undefined; // 是否受控?皆有值為true(受控)。!== 嚴格不等於。undefined 尚未設定。
  const displayValue = isControlled ? value : internalValue; //是否受控? true 顯示value(from父元件)，false顯示internalValue(元件內部)。

  const handleChange = (e) => {// 當拖曳滑桿時，傳入事件物件 e。
    const newValue = Number(e.target.value);//newValue : 滑桿值。 e.target.value 取得目前滑桿的值 (str) 。 Number() 轉換成數字，
    if (isControlled) {//是否受控?
      onChange(newValue);// 是，呼叫父元件傳進來的 onChange 函式，並把新的數值傳給父元件處理
    } else {
      setInternalValue(newValue); // 否，更新元件內部狀態 internalValue，這樣元件會更新、顯示新的值
    }
  };

  return (
    <>
      <input
        type="range" // type="range" : 滑桿輸入類型。
        min="0"
        max="255"
        value={displayValue} // 顯示值 : 是否受控? true 在父元素顯示 value，false 元件自身顯示 internalValue。
        onChange={handleChange}//拖曳滑桿時，會呼叫 handleChange 函式。
      />
      <span>{displayValue}</span> {/*顯示值 : 是否受控? true 在父元素顯示 value，false 元件自身顯示 internalValue。*/} 
    </>
  );
}

export default MySlider;