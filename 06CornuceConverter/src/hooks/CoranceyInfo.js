import { useEffect,useState } from "react";

function useCoranceyInfo(currency){
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then(() => {
        
      })
    }, [])
    
}