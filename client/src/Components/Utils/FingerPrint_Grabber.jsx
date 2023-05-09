import React from 'react'
import {getFingerprint, getRawFingerprint} from "react-fingerprint"

const FingerPrint_Grabber = () => {
    React.useEffect(()=>{
        (async ()=>{

            const rawData = getRawFingerprint()
            const data = getFingerprint()
            console.log(rawData, data)
        })

    }, [])

  return (
    <div>FingerPrint_Grabber</div>
  )
}

export default FingerPrint_Grabber