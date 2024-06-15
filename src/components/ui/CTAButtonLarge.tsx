import React from 'react';

import { CTAButtonProps } from '@/lib/types';

const CTAButtonLarge: React.FC<CTAButtonProps> = ({
  buttonWidth = "342px",
  buttonHeight = "52px",
  buttonColor,
  borderColor,
  borderThickness,
  borderRadius = "8px",
  buttonText,
  buttonTextSize = "16px",
  buttonTextWeight = 600,
  buttonTextColor,
  disabled = false,
}) => {
  const buttonStyles = {
    width: buttonWidth,
    height: buttonHeight,
    backgroundColor: buttonColor,
    borderColor: borderColor,
    borderWidth: borderThickness,
    borderRadius: borderRadius,
    text: buttonText,
    fontSize: buttonTextSize,
    fontWeight: buttonTextWeight,
    color: buttonTextColor,
    disabled: disabled,
  };

  return (
    <button
      className={`flex justify-center items-center font-semibold rounded-md transition-colors duration-300 ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
      style={buttonStyles}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default CTAButtonLarge;
