import React, { useEffect, useState } from 'react'
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

function CountryDaily() {

    const [countryData, setCountryData] = useState([])

    useEffect(() => {
      const getData = async ()=>{
        const res = await fetch("https://api.rootnet.in/covid19-in/stats/history")
        let data = await res.json()
        // let newData = data.data.map((x)=>x.day)
        // console.log(newData)
        setCountryData(data.data);
      }

      getData()
    }, [])


    const data = {
        labels : countryData.map((x)=>x.day),
        datasets: [
            {
              label: "Confirmed Covid 19 cases",
              data: countryData.map((x)=>x.summary.total),
              borderWidth: 3,
              fill: false,
              borderColor: "cyan"
            },
            {
                label: "Deceased Covid 19 cases",
              data: countryData.map((x)=>x.summary.deaths),
              borderWidth: 0.5,
              fill: false,
              borderColor: "red"
            },

            {
                label: "Recovered Covid 19 cases",
              data: countryData.map((x)=>x.summary.discharged),
              borderWidth: 1,
              fill: false,
              borderColor: "green"
            },

          ],
          
    }
    
  return (
    <div className="chart-container w-9/12 mx-auto my-24  md:h-[70vh] pl-[10vw]">
      <Line
        data={data}
      />
    </div>
  )
}

export default CountryDaily