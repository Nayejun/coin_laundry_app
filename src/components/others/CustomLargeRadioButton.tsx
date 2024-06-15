import RadioLargeActive from "@/assets/icons/others/radioLargeActive.svg";
import RadioLargeInactive from "@/assets/icons/others/radioLargeInactive.svg";

export default function CustomLargeRadioButton({
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
				<RadioLargeActive
					width={24}
					height={24}
					style={{ marginRight: "8px" }}
				/>
			) : (
				<RadioLargeInactive
					width={24}
					height={24}
					style={{ marginRight: "8px" }}
				/>
			)}
			<span style={{ marginLeft: "8px" }}>{label}</span>
		</label>
	);
}
