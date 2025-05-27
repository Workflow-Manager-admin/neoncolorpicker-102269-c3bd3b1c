import React, { useState } from "react";
import "./NeonColorPicker.css";

const COLORS = {
  NEON_GREEN: { name: "Neon Green", code: "#39FF14" },
  NEON_BLUE: { name: "Neon Blue", code: "#1F51FF" },
};

const PREVIEW_TEXT = "This is your neon preview!";


// PUBLIC_INTERFACE
function NeonColorPicker() {
  /**
   * NeonColorPicker is the main color selection container for neon green and neon blue.
   * UI: two large selectable swatches (top), a live color preview (bottom), all in a clean/light layout.
   */
  const [selectedColor, setSelectedColor] = useState(COLORS.NEON_GREEN.code);

  return (
    <div className="neon-picker-container">
      <h2 className="neon-picker-title">Neon Color Picker</h2>
      <div className="neon-swatches-row">
        {Object.values(COLORS).map((color) => (
          <button
            key={color.name}
            className={`neon-swatch ${selectedColor === color.code ? "active" : ""}`}
            style={{
              backgroundColor: color.code,
              color: "#fff",
              boxShadow:
                selectedColor === color.code
                  ? `0 0 28px 4px ${color.code}, 0 0 0 3px #fff inset`
                  : `0 0 24px 0px ${color.code}`,
            }}
            aria-label={`Select ${color.name}`}
            onClick={() => setSelectedColor(color.code)}
            type="button"
          >
            <span className="swatch-label">{color.name}</span>
          </button>
        ))}
      </div>
      <div className="neon-preview-area" style={{ backgroundColor: selectedColor }}>
        <span className="neon-preview-text">
          {PREVIEW_TEXT}
        </span>
      </div>
    </div>
  );
}

export default NeonColorPicker;
