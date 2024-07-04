export const getFromLocalStorage = (key: string) => {
	if (typeof window !== "undefined") {
		const value = localStorage.getItem(key);
		if (value) {
			try {
				return JSON.parse(value);
			} catch (error) {
				console.error(
					`Error parsing JSON from localStorage for key ${key}:`,
					error
				);
				return value; // Return the raw value if it's not JSON
			}
		}
	}
	return null;
};

export const saveToLocalStorage = (key: string, value: any) => {
	if (typeof window !== "undefined") {
		try {
			const jsonString = JSON.stringify(value);
			localStorage.setItem(key, jsonString);
		} catch (error) {
			console.error(
				`Error saving JSON to localStorage for key ${key}:`,
				error
			);
		}
	}
};

export const clearLocalStorage = () => {
	if (typeof window !== "undefined") {
		localStorage.clear();
	}
};

export const combineAndSaveData = () => {
	const shippingName = getFromLocalStorage("shippingName");
	const receiverName = getFromLocalStorage("receiverName");
	const selectedAddress = getFromLocalStorage("selectedAddress");
	const detailedAddress =
		getFromLocalStorage("detailedAddress") || "";
	const entryMethod = getFromLocalStorage("entryMethod");
	const entryInput = getFromLocalStorage("entryInput") || "";
	const carrierOption = getFromLocalStorage("carrierOption");
	const carrierInput = getFromLocalStorage("carrierInput") || "";
	const phoneNumber = getFromLocalStorage("phoneNumber");

	if (
		shippingName &&
		receiverName &&
		selectedAddress &&
		entryMethod &&
		carrierOption &&
		phoneNumber
	) {
		const id = `${shippingName.replace(
			/\s+/g,
			"-"
		)}--${receiverName.replace(
			/\s+/g,
			"-"
		)}--${phoneNumber.replace(/\s+/g, "-")}`;
		const data = {
			shippingName,
			receiverName,
			selectedAddress,
			detailedAddress,
			entryMethod,
			entryInput,
			carrierOption,
			carrierInput,
			phoneNumber,
			isDefault: false,
			id,
		};

		saveToLocalStorage(id, data);
		return data;
	} else {
		throw new Error(
			"Some mandatory fields are missing in localStorage"
		);
	}
};

export const clearSpecificLocalStorageItems = () => {
  if (typeof window !== 'undefined') {
    const phoneNumber = localStorage.getItem('phoneNumber');
		const id = localStorage.getItem('editAddressId');
    const keysToKeep = ['phoneNumber','editAddressId'];

    Object.keys(localStorage).forEach((key) => {
      if (!keysToKeep.includes(key)) {
        localStorage.removeItem(key);
      }
    });

    if (phoneNumber) {
      localStorage.setItem('phoneNumber', phoneNumber);
    }
  }
};