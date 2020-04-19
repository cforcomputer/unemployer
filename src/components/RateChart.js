import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

// TESTING FOR FETCHING API FROM WWW.BLS.GOV
// Data input for the RateChart chart.js generation -> 'data'
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'US Unemployment Rate',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const RateChart = () => {
    return (
        <div>
            <h2>Current unemployment</h2>
            <Bar
                data={data}
                width={100}
                height={50}
                options={{
                    responsive: true,
                    maintainAspectRatio: true
                }}
            />
        </div>
    );
}

export default RateChart;
