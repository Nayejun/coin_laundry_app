import React from "react";
import {
	Box,
	Typography,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Laundry, laundries, reviews } from "./map/dummy";

interface BottomSheetProps {
	selectedStore: Laundry | null;
	showAllStores: boolean;
	onClose: () => void;
	onShowAllStores: () => void;
	onListItemClick: (index: number) => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
	selectedStore,
	showAllStores,
	onClose,
	onShowAllStores,
	onListItemClick,
}) => {
	return (
		<Box
			sx={{
				position: "absolute",
				bottom: 0,
				width: "100%",
				background: "#fff",
				boxShadow: "0px -2px 10px rgba(0,0,0,0.1)",
				borderRadius: "10px 10px 0 0",
				padding: "10px 20px",
			}}
		>
			{selectedStore ? (
				<>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<IconButton onClick={onClose}>
							<ArrowBackIcon />
						</IconButton>
						<Typography variant="h6">
							{selectedStore.name}
						</Typography>
					</Box>
					<Typography variant="body2">
						{selectedStore.address}
					</Typography>
					<Typography variant="body2">
						Rating: {selectedStore.rating}
					</Typography>
					<Typography variant="body2">
						Reviews: {selectedStore.reviews}
					</Typography>
					<List>
						{reviews.map((review) => (
							<ListItem key={review.id}>
								<ListItemText
									primary={review.content}
									secondary={`${review.user} - ${review.date}`}
								/>
							</ListItem>
						))}
					</List>
					<Button variant="contained" onClick={onShowAllStores}>
						지역 전체 보기
					</Button>
				</>
			) : (
				<>
					<Typography variant="h6">세탁소 목록</Typography>
					<List>
						{laundries.map((store, index) => (
							<ListItem
								key={store.id}
								onClick={() => onListItemClick(index)}
							>
								<ListItemText
									primary={store.name}
									secondary={store.distance}
								/>
							</ListItem>
						))}
					</List>
				</>
			)}
		</Box>
	);
};

export default BottomSheet;
