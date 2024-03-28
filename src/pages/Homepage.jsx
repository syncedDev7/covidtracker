import React from 'react'
import {Typography} from "@material-tailwind/react";
import covid from '../assets/covid.gif'
import Summary from '../component/Summary';
import CountryDaily from '../component/CountryDaily';
import chartgif from '../assets/spread-chart (1).gif';
import Cards from '../component/Cards';
import symptoms from '../assets/symptoms.png'
import Signout from '../component/Signout';
import EmergencyContacts from '../component/EmergencyContacts';




function Homepage() {
  return (
    <>
        <div className='flex flex-col gap-5'> 
        <Signout/>
            <div className='flex items-center mx-auto my-11 '>
              <img src={covid} className='w-24 h-24' alt="" />
              <Typography variant="h1" className=''>Covid 19 Tracker</Typography>
            </div>
            <div >
              <Summary/>
              <CountryDaily/>
            </div>
            <div className='flex mx-auto items-center gap-2'>
              <img src={chartgif} className='w-12 h-12' alt="" />
              <Typography variant='h3' className='mx-auto'>Get Statewise data</Typography>
            </div>
            <Cards/>
            <img src={symptoms} alt="" className='w-full md:w-9/12 h-[90vh] md:h-auto mx-auto my-10 md:my-24' />
            <EmergencyContacts/>
            
        </div>

        

        
    </>
  )
}

export default Homepage