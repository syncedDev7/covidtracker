import React, { useEffect } from "react";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);


function LineChart({ chartData }) {

    console.log(chartData);
    

    
    


    const data = {
        labels : Object.keys(chartData),
        datasets: [
            {
              label: "Confirmed Covid 19 cases",
              data: Object.entries(chartData).map(([key,value])=>{
                return value.total.confirmed
              }),
              borderWidth: 3,
              fill: false,
              borderColor: "cyan"
            },
            {
                label: "Deceased Covid 19 cases",
              data: Object.entries(chartData).map(([key,value])=>{
                return value.total.deceased
              }),
              borderWidth: 0.5,
              fill: false,
              borderColor: "red"
            },

            {
                label: "Recovered Covid 19 cases",
              data: Object.entries(chartData).map(([key,value])=>{
                return value.total.recovered
              }),
              borderWidth: 1,
              fill: false,
              borderColor: "green"
            },

          ],
          
    }
  return (
    <div className="chart-container mx-auto">
      <Line
        data={data}
      />
    </div>
  );
}
export default LineChart;