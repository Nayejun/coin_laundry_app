"use client"

import { useState } from "react"

import { ToggleSwitchProps } from "@/lib/types"

const ToggleSwitchForWeb = ({
  initialChecked = false,
  onToggle,
  knobSizeOff = "29px",
  knobSizeOn = "29px",
  knobColorOff = "#FFF",
  knobColorOn = "#FFF",
  knobOpacityOff = 0.29,
  knobOpacityOn = 1,
  trackColorOff = "#70737C",
  trackColorOn = "#0066FF",
  trackOpacityOff = 0.5,
  trackOpacityOn = 1,
  borderColor = "transparent",
  borderThickness = "0px",
  borderOpacity = 1, // Default to fully opaque
  opacity = 0.43,
  disabled = false,
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
  const knobMargin = `calc((${trackHeight}px - ${knobSizeOn}) / 2)`

  // Function to convert hex color to rgba with the given opacity
  const rgbaColor = (color: string, opacity: number) => {
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
        backgroundColor: isChecked 
          ? rgbaColor(trackColorOn, trackOpacityOn) 
          : rgbaColor(trackColorOff, trackOpacityOff),
        border: `${borderThickness} solid ${rgbaColor(borderColor, borderOpacity)}`,
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
          top: `calc(${borderThickness} + ${knobMargin})`, // Center the knob vertically
          left: isChecked
            ? `calc(${trackWidth}px - ${knobSizeOn} - ${borderThickness} - ${knobMargin})`
            : `calc(${borderThickness} + ${knobMargin})`, // Position right or left
          transition: "left 0.2s",
          width: knobSizeOn,
          height: knobSizeOn,
          borderRadius: "50%",
          backgroundColor: isChecked ? knobColorOn : knobColorOff,
          boxSizing: "border-box",
        }}
      />
    </label>
  )
}

export default ToggleSwitchForWeb
