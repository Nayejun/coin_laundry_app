export type ToggleSwitchProps = {
  initialChecked?: boolean;
  onToggle?: (checked: boolean) => void;
  knobSizeOff?: string;
  knobSizeOn?: string;
  knobColorOff?: string;
  knobColorOn?: string;
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
}