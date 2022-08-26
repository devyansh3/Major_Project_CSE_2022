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
const BarData = [
    ['x', 'Aadhaar updations', 'Aadhaar enrollments'],
    ["Sravanthi Mendu ", 7, 15],
    ["Manjeet Singh", 10, 14],
    ["Nidhi", 9, 18],
    ["Vikas", 8.5, 15.5],
    ["Aman", 7, 13],

  ]
const LineChartOptions = {
  hAxis: {
    title: 'Time Taken',
  },
  vAxis: {
    title: 'No of bookings completed',
  },
  series: {
    1: { curveType: 'function' },
  },
}
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
        <h2 className='ml-4 mt-3'>Average Task Completion Time</h2>

<Chart
          width={'1100px'}
          height={'700px'}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={BarData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
      
      </>
    )
  }
}
export default MultiLineChart

