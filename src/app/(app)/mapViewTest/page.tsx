"use client";

import BottomSheet from "@/components/BotomSheets";
import { Laundry, laundries } from "@/components/map/dummy";
import MapBox from "@/components/map/mapBox";
import React, { useState } from "react";

const Page: React.FC = () => {
	const [selectedStore, setSelectedStore] =
		useState<Laundry | null>(null);
	const [showAllStores, setShowAllStores] = useState(true);
	const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<
		number | null
	>(null);

	const handleMarkerClick = (index: number) => {
		setSelectedStore(laundries[index]);
		setSelectedMarkerIndex(index);
		setShowAllStores(false);
	};

	const handleClose = () => {
		setSelectedStore(null);
		setSelectedMarkerIndex(null);
		setShowAllStores(true);
	};

	const handleListItemClick = (index: number) => {
		setSelectedStore(laundries[index]);
		setSelectedMarkerIndex(index);
		setShowAllStores(false);
	};

	const handleShowAllStores = () => {
		setSelectedStore(null);
		setShowAllStores(true);
	};

	return (
		<div style={{ height: "100vh", position: "relative" }}>
			<MapBox
				onMarkerClick={handleMarkerClick}
				selectedMarkerIndex={selectedMarkerIndex}
			/>
			<BottomSheet
				selectedStore={selectedStore}
				showAllStores={showAllStores}
				onClose={handleClose}
				onShowAllStores={handleShowAllStores}
				onListItemClick={handleListItemClick}
			/>
		</div>
	);
};

export default Page;
