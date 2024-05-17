export type ToggleSwitchProps = {
    initialChecked?: boolean;
    onToggle?: (checked: boolean) => void;
    knobSizeOff?: string;
    knobSizeOn?: string;
    knobColorOff?: string;
    knobColorOn?: string;
    knobMarginOff?: string;
    knobMarginOn?: string;
    trackColorOn?: string;
    trackColorOff?: string;
    borderColor?: string;
    borderThickness?: string;
    opacity?: number;
    disabled?: boolean;
    borderOpacity?: number;
  }