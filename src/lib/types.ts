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

export type RatingStarsProps = {
  defaultValue: number;
  onChange: (value: number) => void;
};
