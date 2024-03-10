import { useState } from "react";
import { useEffect } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setdata] = useState({})
  useEffect(() => {
    fetch(
      `https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setdata(res[currency]))
      .catch((error) => console.log(error));
  }, [currency]);
  console.log('data',data);
  return data
};
export default useCurrencyInfo
