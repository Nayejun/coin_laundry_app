export type ToggleSwitchProps = {
    initialChecked?: boolean;
    onToggle?: (checked: boolean) => void;
    knobSize?: string;
    knobColor?: string;
    knobBorderThickness?: string;
    trackColorOn?: string;
    trackColorOff?: string;
    borderColor?: string;
    borderThickness?: string;
    opacity?: number;
    disabled?: boolean;
    borderOpacity?: number;
  }