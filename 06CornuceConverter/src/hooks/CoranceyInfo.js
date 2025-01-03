import { useEffect,useState } from "react";

function useCoranceyInfo(currency){
    useEffect(() => {

      const [data, setdata] = useState([])

      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setdata(res[currency]))
    }, [currency])
    return data
}

export default useCoranceyInfo;