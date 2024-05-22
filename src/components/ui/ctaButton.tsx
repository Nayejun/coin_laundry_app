import React from 'react';

import { CTAButtonProps } from '@/lib/types';

const CTAButton: React.FC<CTAButtonProps> = ({
  buttonWidth,
  buttonHeight,
  buttonColor,
  borderColor,
  borderThickness,
  buttonText,
  buttonTextSize,
  buttonTextColor,
  disabled = false,
}) => {
  const buttonStyles = {
    width: buttonWidth,
    height: buttonHeight,
    backgroundColor: buttonColor,
    borderColor: borderColor,
    borderWidth: borderThickness,
    color: buttonTextColor,
    fontSize: buttonTextSize,
  };

  return (
    <button
      className={`flex justify-center items-center font-bold rounded transition-colors duration-300 ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      }`}
      style={buttonStyles}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default CTAButton;
