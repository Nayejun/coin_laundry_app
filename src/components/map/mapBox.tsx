"use client";

import React, { useCallback, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Layer, Map, Source, Marker } from "react-map-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";
import MyLocationMarkerImg from "@/assets/MyLocationMarker";
import LaundryRoomMarkerImg from "@/assets/LaundryRoomMarker";
import SelectMarkerImg from "@/assets/SelectMarker";
import { useGeoLocation } from "@/app/hooks/useGeoLocation";
import { SeoulAdministrativeDistrict } from "@/assets/SeoulAdministrativeDistrict";
import {
	FeatureCollection,
	Geometry,
	GeoJsonProperties,
} from "geojson";

const geolocationOptions = {
	enableHighAccuracy: true,
	timeout: 1000 * 10,
	maximumAge: 1000 * 3600 * 24,
};

const MAP_TOKEN =
	"pk.eyJ1IjoibGF1bmRyeS1mcm9udGVuZCIsImEiOiJjbHgyNDF4MmkwZml3MmtzNG91MHBpZ3Z2In0.UOaMbpvUJ3k1UrU8UUTOXQ";
const KAKAO_API_URL =
	"https://dapi.kakao.com/v2/local/geo/coord2regioncode.json";
const KAKAO_API_KEY = "KakaoAK 85573ea9485abb72db9e44786219f539";

// dummy store
const storeList = [
	{ name: "매장1", location: [37.472734, 126.969105] },
	{ name: "매장2", location: [37.473236, 126.97035] },
	{ name: "매장3", location: [37.472936, 126.968432] },
	{ name: "매장4", location: [37.472986, 126.9736] },
	{ name: "매장5", location: [37.474115, 126.97247] },
];

const Mapbox = () => {
	const [mappingDistrict, setMappingDistrict] = useState<string>("");
	const [initialViewState, setInitialViewState] = useState<any>(null);
	const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<
		number | null
	>(null);
	const { location, error } = useGeoLocation(geolocationOptions);

	const onRender = useCallback((e: any) => {
		e.target.addControl(
			new MapboxLanguage({ defaultLanguage: "ko" })
		);
	}, []);

	const getSeoulAdministrativeDistrict = async (
		latitude: number,
		longitude: number
	) => {
		try {
			const response = await fetch(
				`${KAKAO_API_URL}?x=${longitude}&y=${latitude}`,
				{
					headers: {
						Authorization: KAKAO_API_KEY,
					},
				}
			);
			const data = await response.json();
			setMappingDistrict(data.documents[0].region_2depth_name);
		} catch (error) {
			console.error("위치 정보를 가져오는데 실패했어요.:", error);
		}
	};

	useEffect(() => {
		if (location) {
			setInitialViewState({
				latitude: location.latitude,
				longitude: location.longitude,
				zoom: 13,
				maxZoom: 17,
				minZoom: 11.5,
			});
			getSeoulAdministrativeDistrict(
				location.latitude,
				location.longitude
			);
		} else if (error) {
			console.error(error);
		}
	}, [location, error]);

	const getDistrictCoordinates = (districtName: string) => {
		return SeoulAdministrativeDistrict.flatMap((district) =>
			district.features
				.filter((feature) => feature.properties.name === districtName)
				.flatMap((feature) => feature.geometry.coordinates)
		);
	};

	const generateGeoJSON = (districtName: string) => {
		const coordinates = getDistrictCoordinates(districtName);
		return {
			type: "FeatureCollection",
			features: [
				{
					type: "Feature",
					geometry: {
						type: "Polygon",
						coordinates: coordinates,
					},
				},
			],
		};
	};

	const geojson = mappingDistrict
		? generateGeoJSON(mappingDistrict)
		: null;

	return (
		<>
			{initialViewState && (
				<Map
					initialViewState={initialViewState}
					onRender={onRender}
					mapboxAccessToken={MAP_TOKEN}
					mapStyle="mapbox://styles/mapbox/streets-v12"
				>
					{storeList.map((store, idx) => (
						<Marker
							key={idx}
							latitude={store.location[0]}
							longitude={store.location[1]}
							onClick={() => setSelectedMarkerIndex(idx)}
						>
							{selectedMarkerIndex === idx ? (
								<SelectMarkerImg />
							) : (
								<LaundryRoomMarkerImg />
							)}
						</Marker>
					))}
					{location && (
						<Marker
							latitude={location.latitude}
							longitude={location.longitude}
						>
							<MyLocationMarkerImg />
						</Marker>
					)}
					{geojson && (
						<Source
							id="district"
							type="geojson"
							data={
								geojson as FeatureCollection<
									Geometry,
									GeoJsonProperties
								>
							}
						>
							<Layer
								id="district-layer"
								type="fill"
								paint={{
									"fill-color": "#00B4B2",
									"fill-opacity": 0.4,
								}}
							/>
							<Layer
								id="outline"
								type="line"
								paint={{
									"line-color": "#ADE4E5",
									"line-width": 2,
								}}
							/>
						</Source>
					)}
				</Map>
			)}
		</>
	);
};

export default Mapbox;
