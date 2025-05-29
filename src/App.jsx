import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MySlider from './component/rgb-panel/MySlider'
import MyPanel from './component/rgb-panel/MyPanel'
import MyCalculator from './component/calculator/MyCalculator'
import TicTacToe from './component/tic-tac-toe/TicTacToe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
