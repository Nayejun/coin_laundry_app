"use client"

import { useState } from "react"

export type ToggleSwitchProps = {
  initialChecked?: boolean;
  onToggle?: (checked: boolean) => void;
  knobSizeOff?: string;
  knobSizeOn?: string;
  knobColorOff?: string;
  knobColorOn?: string;
  trackColorOn?: string;
  trackColorOff?: string;
  borderColor?: string;
  borderThickness?: string;
  opacity?: number;
  disabled?: boolean;
  borderOpacity?: number;
}

const ToggleSwitch = ({
  initialChecked = false,
  onToggle,
  knobSizeOff = "16px",
  knobSizeOn = "24px",
  knobColorOff = "#74757F",
  knobColorOn = "#FFF",
  trackColorOn = "#0066FF",
  trackColorOff = "#70737C",
  borderThickness = "0px",
  opacity = 0.43,
  disabled = false,
  borderOpacity = 1, // Default to fully opaque
}: ToggleSwitchProps) => {
  const [isChecked, setIsChecked] = useState(initialChecked)

  const toggleSwitch = () => {
    if (!disabled) {
      setIsChecked(!isChecked)
      onToggle && onToggle(!isChecked)
    }
  }

  const trackWidth = 52
  const trackHeight = 32

  // Function to convert hex color to rgba with the given opacity
  const rgbaBorderColor = (color: string, opacity: number) => {
    if (color.startsWith('#')) {
      const bigint = parseInt(color.slice(1), 16)
      const r = (bigint >> 16) & 255
      const g = (bigint >> 8) & 255
      const b = (bigint & 255)
      return `rgba(${r},${g},${b},${opacity})`
    }
    return color.replace('rgb', 'rgba').replace(')', `,${opacity})`)
  }

  // Dynamic knob size and color based on isChecked state
  const knobSize = isChecked ? knobSizeOn : knobSizeOff
  const knobColor = isChecked ? knobColorOn : knobColorOff

  // Calculate the knob margin to center it vertically
  const knobMargin = isChecked ? `2px`: `6px`
  const borderColor = isChecked ? "transparent" : "#74757F"

  return (
    <label
      style={{
        position: "relative",
        display: "inline-block",
        width: `${trackWidth}px`, // Track width stays the same
        height: `${trackHeight}px`, // Track height stays the same
        borderRadius: `${trackHeight / 2}px`, // Half the height to create a perfect oval shape
        backgroundColor: isChecked ? trackColorOn : trackColorOff,
        border: `${borderThickness} solid ${rgbaBorderColor(borderColor, borderOpacity)}`,
        transition: "background-color 0.2s, border-color 0.2s",
        cursor: disabled ? "not-allowed" : "pointer",
        boxSizing: "border-box", // Ensures the border is included within the track size
        opacity: opacity,
      }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleSwitch}
        disabled={disabled}
        style={{ opacity: 0, width: 0, height: 0 }}
        className="sr-only"
      />
      <span
        style={{
          position: "absolute",
          top: knobMargin, // Center the knob vertically
          left: isChecked
            ? `22px`
            : `calc(${borderThickness} + ${knobMargin})`, // Position right or left
          transition: "left 0.2s, top 0.2s, width 0.2s, height 0.2s, background-color 0.2s",
          width: knobSize,
          height: knobSize,
          borderRadius: "50%",
          backgroundColor: knobColor,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Optional: Adds shadow for more depth
          boxSizing: "border-box",
        }}
      />
    </label>
  )
}

export default ToggleSwitch
