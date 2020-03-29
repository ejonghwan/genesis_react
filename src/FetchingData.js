import React, {useState, useEffect} from 'react';


const useFetcingData = (target, url, data) => {
    const [loading, setLoading] = useState(false)
    const handleData = async () => {
      setLoading(true)
      const response = await fetch(url);
      const dating = await response.json()
      target(dating)
      setLoading(false)
    }
  
    useEffect( () => {
      handleData()
    }, [] )
  
    return loading

  
  
  }
  

  export default useFetcingData;