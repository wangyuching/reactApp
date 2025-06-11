import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// 在 HTML(index.html) 最上層找到 id 為 root 的根元素並 render 一個 App(App.jsx) 的元件。
/* 
  createRoot() : 建立根節點(指定的 DOM 元素( div id="root" ) ) ，讓 React 從這裡開始顯示、運作、管理整個 React 應用程式。
  .render() : 將 React 元件( <App /> )顯示到指定的 DOM 元素( div id="root" )中。
  StrictMode : 現代 React 專案的標準做法，代表應用程式受到嚴格模式的檢查，有助於提升程式碼品質與可維護性
*/