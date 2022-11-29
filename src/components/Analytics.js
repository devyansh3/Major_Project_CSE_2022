import React, { Component } from 'react'
import Chart from 'react-google-charts'


import './Analytics.css'
const LineData = [
  ['x', 'Aadhaar updations', 'Aadhaar enrollments'],
  ["18-Aug", 7, 4],
  ["19-Aug", 10, 2],
  ["20-Aug", 23, 9],
  ["21-Aug", 17, 7],
  ["22-Aug", 18, 4],
  ["23-Aug", 9, 5],
  ["24-Aug", 11, 3],
  ["25-Aug", 17, 9],
]
const PieData = [
    ['x', 'Completed Bookings', 'Incompleted Bookings'],
    ["Completed Bookings", 105, 4],
    ["Incompleted Bookings", 8, 2],
  ]

  const PieData2 = [
    ['x', 'Operations in Urban Area', 'Operations in Rural Area'],
    ["Operations in Urban Area", 98, 4],
    ["Operations in Rural Area", 8, 2],
  ]
const BarData = [
    ['x', 'Aadhaar updations', 'Aadhaar enrollments'],
    ["Vansh arora", 10, 14],
    ["Sravanthi Mendu ", 7, 15],
    ["Deepika Dasari", 8.5, 15.5],
    ["Swati Sinha", 9, 18],
    ["Pradeep Tetkale", 7, 13],

  ]
const LineChartOptions = {
  hAxis: {
    title: 'Time Taken (in minutes)',
  },
  vAxis: {
    title: 'Operators',
  },
  series: {
    1: { curveType: 'function' },
  },
}


export const data4 = [
  ["operators", "Positive reviews", "Negative reviews"],
  ["Vansh Arora", 41, 50],
  ["Sravanthi Mendu", 37, 39],
  ["Deepika Dasari", 26, 38],
  ["Swati Sinha", 20, 19],
  ["Pradeep Tetkale", 45, 45],
];

export const data5 = [
  ["Vansh", "Urban-Rural", "Time-Taken", "experience", "completed tasks"],
  ["Sravathi", 17.2, 0.67, "Experienced", 80],
  ["deepika", 22.1, -0.36, "Intermediate", 45],
  ["Vansh", 24.6, 0.78, "New Recruit", 30],
  ["Keshav", 23.4, 0.27, "New Recruit", 25],
  ["Swati", 20.6, 0.54, "Intermediate", 40],
  ["Pradeep", 18.4, -0.15, "Experienced", 70],
];

export const options5 = {
  title:
    "Correlation between working locations of operators" +
    " and the time taken",
  hAxis: { title: "Time taken" },
  vAxis: { title: "Rural to Urban" },
  bubble: {
    textStyle: {
      fontSize: 12,
      fontName: "Times-Roman",
      color: "green",
      bold: true,
      italic: true,
      auraColor: "none",
    },
  },
}

export const data3 = [
  ["Name", "User Rating"],
  ["Vansh Arora", 71],
  ["Sravanthi Mendu", 37],
  ["Deepika Dasari", 56],
  ["Swati Sinha", 80],
  ["Pradeep Tetkale", 45],
];

export const options4 = {
  title: "",
  chartArea: { width: "50%" },
  isStacked: true,
  hAxis: {
    title: "No of reviews",
    minValue: 0,
  },
  vAxis: {
    title: "Operators",
  },
};

class MultiLineChart extends Component {
  render() {
    return (
        <>

        <div className="container mt-3">
        <h2 className='ml-4 mt-3'>Operator Analytics</h2>


        <div className='d-flex'>

        <Chart
          width={'800px'}
          height={'400px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
        {/* <h2 className='ml-4'>Incomplete vs Completed Requests</h2> */}
        <div class="verticalLine">

</div>


<Chart
          width={'500px'}
          height={'400px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={PieData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
        </div>
<hr></hr>
        <h2 className='ml-4 mt-3'>Average Task Completion Time and user review analytics</h2>
<div className='d-flex'>


<Chart
      chartType="BarChart"
      width="80%"
      height="400px"
      data={data3}
      chartPackages={["corechart", "controls"]}
     
    />

<div class="verticalLine">

</div>

<Chart
      chartType="BarChart"
      width="80%"
      height="400px"
      data={data4}
      options={options4}
    />

</div>
<hr></hr>

<div className='d-flex'>
<Chart
          width={'668px'}
          height={'550px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={PieData2}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />

    
<div class="verticalLine">

</div>
<Chart
      chartType="BubbleChart"
      width="80%"
      height="600px"
      data={data5}
      options={options5}
    />
</div>


      </div>
      
      </>
    )
  }
}
export default MultiLineChart





