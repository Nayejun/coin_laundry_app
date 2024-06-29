export const convertLocalStorageToJson = () => {
  const keys = [
    'shippingName',
    'receiverName',
    'selectedAddress',
    'detailedAddress',
    'entryMethod',
    'entryInput',
    'carrierOption',
    'carrierInput',
    'phoneNumber'
  ];

  keys.forEach(key => {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        JSON.parse(value); // Check if it's already JSON
      } catch (error) {
        // If it's not JSON, convert it to JSON and save it back
        localStorage.setItem(key, JSON.stringify(value));
      }
    }
  });
};