import { useState } from "react";
import MySlider from "./MySlider";

function MyPanel() {
    const [r, setR] = useState(128); //參考 App.jsx line11-13
    const [g, setG] = useState(128); //參考 App.jsx line11-13
    const [b, setB] = useState(128); //參考 App.jsx line11-13
    // 建立狀態變數 (r, g, b) : 目前值/初始值為 128，更新狀態的函式（setR, setG, setB）。

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding:"15px"
        }}>
            <div style={{ marginBottom: '10px' }}>
                R: <MySlider value={r} onChange={setR} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                G: <MySlider value={g} onChange={setG} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                B: <MySlider value={b} onChange={setB} />
            </div>
            <div
                style={{
                    background: `rgb(${r}, ${g}, ${b})`, // 插補字串。
                    width: '100px',
                    height: '100px',
                    borderRadius: '50px',
                    marginBottom: '10px',
                }}>
            </div>
            <div>RGB:({r},{g},{b})</div>
        </div>
    );
}

export default MyPanel;