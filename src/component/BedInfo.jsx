import React, { useEffect, useState } from 'react'
import { Card, Typography } from "@material-tailwind/react";
 


function BedInfo() {

  const [bedData, setBedData] = useState([]);

  useEffect(() => {
    const getData = async ()=>{
      const res = await fetch("https://api.rootnet.in/covid19-in/hospitals/beds");
      const data = await res.json();
      setBedData(data.data.regional)
      console.log(data.data.regional)
    }

    getData()
  }, [])
  
  const TABLE_HEAD = ["State", "Rural Hospitals", "Rural Beds", "Urban Hospitals","Urban Beds"];
 
  const TABLE_ROWS = bedData;



  return (
    <>
    <Typography variant='h3' className='py-11'>Satewise Available Beds</Typography>
    <Card className="h-full w-8/12 mx-auto overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ state, ruralHospitals, ruralBeds, urbanHospitals, urbanBeds}, index) => (
            <tr key={state} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {state}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {ruralHospitals}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {ruralBeds}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {urbanHospitals}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {urbanBeds}
                </Typography>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    </>
  )
}

export default BedInfo