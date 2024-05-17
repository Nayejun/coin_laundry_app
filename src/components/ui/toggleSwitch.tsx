"use client"

import { useState } from "react"

import { ToggleSwitchProps } from "@/lib/types"

const ToggleSwitch = ({
  initialChecked = false,
  onToggle,
  knobSize = "29px",
  knobColor = "white",
  knobBorderThickness = "4px",
  trackColorOn = "#0066FF",
  trackColorOff = "#70737C",
  borderColor = "transparent",
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

  // Calculate the knob margin to equally space it from top, bottom, and sides
  const knobMargin = `calc((${trackHeight}px - ${knobSize}) / 2)`

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
          top: `calc((${borderThickness} + ${knobMargin})`, // Center the knob vertically
          left: isChecked
            ? `calc(${trackWidth}px - ${knobSize} - ${borderThickness} - ${knobMargin})`
            : `calc(${borderThickness} + ${knobMargin})`, // Position right or left
          transition: "left 0.2s",
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
