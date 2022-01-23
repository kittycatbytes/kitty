import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorSelector = ({ color, onColorPickerClick }) => {
    const [updatedDisplay, toggleStyle] = useState({ display: "none" });
    const [isHidden, toggleHide] = useState(false);
    var pickerStyleShow = { display: "block", position: "absolute", bottom: 50, right: 0 };
    var pickerStyleHide = { display: "none" };

    const togglePicker = () => {
        var style = isHidden ? pickerStyleHide : pickerStyleShow;
        toggleStyle(style);
        console.log(style);
        toggleHide(!isHidden);
        console.log(isHidden);
    }

    return (
        <div >
            <div class="picker" style={{ position: "relative" }}>
                <div class="sketch-picker" style={updatedDisplay}><SketchPicker onChange={onColorPickerClick} color={color} /></div>
                <div class="picker-dot" onClick={togglePicker} style={{ backgroundColor: color, border: isHidden ? "2px solid #fff" : "none"  }}></div>
            </div>
        </div>
    );
};

export default ColorSelector;