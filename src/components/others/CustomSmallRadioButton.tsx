import RadioSmallActive from "@/assets/icons/others/radioSmallActive.svg";
import RadioSmallInactive from "@/assets/icons/others/radioSmallInactive.svg";

export default function CustomSmallRadioButton({
	id,
	name,
	value,
	label,
	checked,
	onChange,
}) {
	return (
		<label
			htmlFor={id}
			style={{
				display: "flex",
				alignItems: "center",
				cursor: "pointer",
			}}
		>
			<input
				type="radio"
				id={id}
				name={name}
				value={value}
				checked={checked}
				onChange={onChange}
				style={{ display: "none" }}
			/>
			{checked ? (
				<RadioSmallActive
					width={24}
					height={24}
					style={{ marginRight: "8px" }}
				/>
			) : (
				<RadioSmallInactive
					width={24}
					height={24}
					style={{ marginRight: "8px" }}
				/>
			)}
			<span style={{ marginLeft: "8px" }}>{label}</span>
		</label>
	);
}
