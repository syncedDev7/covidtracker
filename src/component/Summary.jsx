import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'

function Summary() {

    const [summary, setSummary] = useState({})

    useEffect(() => {
      const getData = async ()=>{
        const res = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
        let data = await res.json();
        // console.log(data.data.summary)
        setSummary(data.data.summary)
      }

      getData()
    }, [])
    
  return (
    <div className='md:flex md:justify-center   pl-24  md:gap-24'>
        <div className='md:h-48 mb-[3.5rem] h-[20vh] w-48 text-center border border-light-blue-300 rounded-xl text-3xl flex flex-col justify-center gap-2 text-blue-400 cursor-pointer hover:scale-110 transition-all ease-in-out'>
            <Typography variant='h4'>Total</Typography>
            <Typography variant='h3'>{summary.total}</Typography>
        </div>
        <div className='md:h-48 mb-[3.5rem] h-[20vh] w-48 text-center border border-red-400 rounded-xl text-3xl flex flex-col justify-center gap-2 text-red-400 cursor-pointer hover:scale-110 transition-all ease-in-out'>
            <Typography variant='h4'>Deaths</Typography>
            <Typography variant='h3'>{summary.deaths}</Typography>
        </div>
        <div className='md:h-48 mb-[3.5rem] h-[20vh] w-48 text-center border border-light-green-300 rounded-xl text-3xl flex flex-col justify-center gap-2 text-green-400 cursor-pointer hover:scale-110 transition-all ease-in-out'>
            <Typography variant='h4'>Recovered</Typography>
            <Typography variant='h3'>{summary.discharged}</Typography>
        </div>
    </div>
  )
}

export default Summary