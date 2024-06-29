"use client";
import { useEffect, useState } from 'react';
import { getShippingInfos } from '@/utils/api';

const CrudAddress = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getShippingInfos();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>Shipping Name: {item.shippingName}</p>
          <p>Receiver Name: {item.receiverName}</p>
          <p>Selected Address: {item.selectedAddress}</p>
          <p>Detailed Address: {item.detailedAddress}</p>
          <p>Entry Method: {item.entryMethod}</p>
          <p>Entry Input: {item.entryInput}</p>
          <p>Carrier Option: {item.carrierOption}</p>
          <p>Carrier Input: {item.carrierInput}</p>
          <p>Phone Number: {item.phoneNumber}</p>
          <p>Is Default: {item.isDefault ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default CrudAddress;
