// src/utils/api.ts

export const saveInputAddress = async (data: any) => {
	try {
		const response = await fetch("/api/input-address", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error("Failed to save input address");
		}

		return await response.json();
	} catch (error) {
		console.error("Error saving input address:", error);
		throw error;
	}
};

export const getInputAddress = async (id: string) => {
	try {
		const response = await fetch(`/api/input-address/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error("Failed to fetch input address");
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching input address:", error);
		throw error;
	}
};

export const updateInputAddress = async (
	id: string,
	data: any
) => {
	try {
		const response = await fetch(`/api/input-address/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error("Failed to update input address");
		}

		return await response.json();
	} catch (error) {
		console.error("Error updating input address:", error);
		throw error;
	}
};

export const deleteInputAddress = async (id: string) => {
	try {
		const response = await fetch(`/api/input-address/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error("Failed to delete input address");
		}

		return await response.json();
	} catch (error) {
		console.error("Error deleting input address:", error);
		throw error;
	}
};
