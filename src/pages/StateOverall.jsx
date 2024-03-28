import React, { useState, useEffect } from 'react'
import Dropdown from '../component/Dropdown'
import { BarChart } from '../component/BarChart'
import BedInfo from '../component/BedInfo'
import Signout from '../component/Signout'
import EmergencyContacts from '../component/EmergencyContacts'

function StateOverall() {

    const [stateName, setStateName] = useState("AN")
    const [stateData, setStateData] = useState({})

    useEffect(() => {
      const getData = async ()=>{
        const res = await fetch("https://data.covid19india.org/v4/min/data.min.json")
        const data = await res.json();
        setStateData(data[stateName].total);
        // console.log(data[stateName].total);
      }

      getData()
    }, [stateName])
  return (
    <>
    
    <div className='flex flex-col justify-center items-center'>
            <Signout className=""/>
            <div className='text-5xl font-poppins font-medium p-11'>Overall Statewise data</div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex justify-start w-full'>
                <Dropdown setState = {setStateName} stateName = {stateName}/>
            </div>

            <div className='my-11 w-full h-full'>
                <BarChart className='h-full w-full' chartData={stateData}/>
            </div>
            <BedInfo/>
            <EmergencyContacts/>
        </div>
    </>
  )
}

export default StateOverall