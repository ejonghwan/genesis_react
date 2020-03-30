import React, { useState, useEffect } from 'react';

const useFetcingData = (cb, url) => {
    const [loading, setLoading] = useState(false)
    const handleData =async () => {
        setLoading(true)
        const response = await fetch(url);
         const fdata = await response.json();
         setLoading(false)
         cb(fdata)
    }
    

   useEffect( () => {
    handleData()
   }, [] )
    // console.log(fdata)
   return loading
   
   
}

export default useFetcingData;