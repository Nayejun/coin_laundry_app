import RadioSmallActive from "@/assets/icons/others/radioSmallActive.svg";
import RadioSmallInactive from "@/assets/icons/others/radioSmallInactive.svg";

interface CustomRadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}) => {
  return (
    <label
      htmlFor={id}
      className={`flex items-center cursor-pointer ${
        checked
          ? "text-body-1-normal font-medium"
          : "text-body-1-normal text-label-assistive"
      }`}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      {checked ? (
        <RadioSmallActive
          width={24}
          height={24}
          className="mr-2 inline-block align-middle"
        />
      ) : (
        <RadioSmallInactive
          width={24}
          height={24}
          className="mr-2 inline-block align-middle"
        />
      )}
      <span className="inline-block align-middle mt-[2px]">{label}</span>
    </label>
  );
};

export default CustomRadioButton;