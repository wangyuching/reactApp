import { useState } from "react";

function MySlider({ value, onChange }) {
    const [internaValue, setInternaValue] = useState(128);
    const isControlled = value !== undefined && onChange !== undefined;
    const displayValue = isControlled ? value : internaValue;

    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        if (isControlled) {
            onChange(newValue);
        } else {
            setInternaValue(newValue);
        }
    };

    return (
        <>
            <input
                type='range'
                min='0'
                max='255'
                value={value}
                onChange={handleChange}
            />
            <span>{value}</span>
        </>
    )
}

export default MySlider;