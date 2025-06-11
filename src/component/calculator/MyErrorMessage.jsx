function MyErrorMessage({ error }) {
  if (!error) return null; // 如果error沒有值，則不顯示任何內容。
  return ( // error有值，顯示錯誤訊息。
    <div className="my-calculator-error">
      {error}
    </div>
  );
}

export default MyErrorMessage;
