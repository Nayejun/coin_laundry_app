export interface Laundry {
  id: number;
  name: string;
  distance: string;
  address: string;
  rating: number;
  reviews: number;
  price: string;
  teamPrice: string;
  location: [number, number];
}

export interface Review {
  id: number;
  user: string;
  date: string;
  content: string;
}

export const laundries: Laundry[] = [
  {
    id: 1,
    name: "소금이 세탁소",
    distance: "1.1km",
    address: "서울시 동작구 000동",
    rating: 4.7,
    reviews: 265,
    price: "배송비 6,000원",
    teamPrice: "배송비 4,800원",
    location: [37.472734, 126.969105],
  },
  {
    id: 2,
    name: "가나다라 세탁소",
    distance: "1.1km",
    address: "서울시 동작구 000동",
    rating: 4.7,
    reviews: 265,
    price: "배송비 6,000원",
    teamPrice: "배송비 4,800원",
    location: [37.473236, 126.97035],
  },
  {
    id: 3,
    name: "서대문구 세탁소",
    distance: "1.1km",
    address: "서울시 동작구 000동",
    rating: 4.7,
    reviews: 265,
    price: "배송비 6,000원",
    teamPrice: "배송비 4,800원",
    location: [37.472936, 126.968432],
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    user: "idf*****",
    date: "2024.05.01",
    content: "이 어플을 알게 된 후 삶의 질이 올라갔어요! 주변에 세탁소가 없어서 드라이도 못했는데 이 어플 덕분에 옷입으면서 바로 빨래를 받을 수 있어서 너무 좋아요!"
  },
  {
    id: 2,
    user: "idf*****",
    date: "2024.05.01",
    content: "이 어플을 알게 된 후 삶의 질이 올라갔어요! 주변에 세탁소가 없어서 드라이도 못했는데 이 어플 덕분에 옷입으면서 바로 빨래를 받을 수 있어서 너무 좋아요!"
  }
];
