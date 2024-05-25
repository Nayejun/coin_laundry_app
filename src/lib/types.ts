export type ToggleSwitchProps = {
  deviceType?: "Web" | "Android" | "IOS";
  initialChecked?: boolean;
  onToggle?: (checked: boolean) => void;
  knobSizeOff?: string;
  knobSizeOn?: string;
  knobColorOff?: string;
  knobColorOn?: string;
  knobOpacityOff?: number;
  knobOpacityOn?: number;
  knobMarginOff?: string;
  knobMarginOn?: string;
  trackColorOff?: string;
  trackColorOn?: string;
  trackOpacityOff?: number;
  trackOpacityOn?: number;
  borderColor?: string;
  borderThickness?: string;
  borderOpacity?: number;
  opacity?: number;
  disabled?: boolean;
};

export type ActionButtonProps = {
  label: string;
  onClick: () => void;
};

export type ValidationFormWithTitleProps = {
  hasTitle: boolean;
};

export type RatingStarsProps = {
  defaultValue: number;
  onChange: (value: number) => void;
};

export type CTAButtonProps = {
  buttonWidth?: string;
  buttonHeight?: string;
  buttonColor?: string;
  borderColor?: string;
  borderThickness?: string;
  borderRadius?: string;
  buttonText?: string;
  buttonTextSize?: string;
  buttonTextColor?: string;
  buttonTextWeight?: number;
  disabled?: boolean;
};

export type DividerProps = {
  color?: string;
  thickness?: string;
  vertical?: boolean;
  length?: string;
  margin?: string;
}

export type RadiusBoxProps = {
  boxWidth: string;
  boxHeight: string;
  borderThickness?: string;
  additionalClasses?: string;
};

export type BasicDividerProps = {
  variant: "thick" | "normal";
  vertical: boolean;
  className: any;
}