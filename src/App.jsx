import { useState } from 'react' // useState 是 React 的一個 Hook，用來在函式元件中建立和管理(用一個函式來更新它)狀態。讓元件可以記住資料
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MySlider from './component/rgb-panel/MySlider'
import MyPanel from './component/rgb-panel/MyPanel'
import MyCalculator from './component/calculator/MyCalculator'
import TicTacToe from './component/tic-tac-toe/TicTacToe'

function App() {
  const [count, setCount] = useState(0)//紀錄每個元件的狀態。
  // 建立狀態變數 (count) : 目前值/初始值為 0，更新狀態的函式（setCount）。
  // 可以呼叫函式 setCount 來改變 count 的值，React 會自動重新顯示元件以反映最新的狀態

  return (//裡面放 JSX 內容來顯示畫面。jsx : HTML外觀、JavaScript動態行為。只能單一樹根，需要用
    <>{/* 這個包起全部的 HTML 標籤 */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>5B1G0023 王昱晴</h1>
      <div className='border'>
        <h2>Slider</h2>
        <p>R:<MySlider /></p>
        <p>G:<MySlider /></p>
        <p>B:<MySlider /></p>
      </div>
      <div className='border'>
        <h2>RGB色彩面板</h2>
        <MyPanel />
      </div>
      <div className='border' style={{ border: "0px" }}>
        <h2>計算機</h2>
        <MyCalculator />
      </div>
      <div className='border' style={{ border: "0px" }}>
        <h2>Tic Tac Toe</h2>
        <TicTacToe />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* 每次點擊按鈕，count 的值都會加 1。
              button點擊時觸發 onClick 事件處理函式(此為箭頭函式)。
                () => 呼叫函式 setCount ，傳入一個回呼函式(count) => count + 1。
                  回呼函式(等一下再執行) : 確保取得最新的 count ，不會因為多次快速點擊而出現錯誤。
        */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
//讓其他檔案 (main.jsx) 可以 import App from './App' 來使用。