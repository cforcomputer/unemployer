import React from 'react';
import {Line} from 'react-chartjs-2';

// TESTING FOR FETCHING API FROM WWW.BLS.GOV
// Data input for the RateChart chart.js generation -> 'data'

const Assign = () => {

        let dataYear = []
        let dataMonth = []
        let dataValue = []
        // Get request
        fetch('https://api.bls.gov/publicAPI/v2/timeseries/data/LNS14000000?registrationkey=983aa868d1b74941b0e0343091f33fbc', {
            method: 'GET'
            // Request type
        })
            .then((response) => response.json())
            // If response is in json then in success
            .then((responseJson) => {

                //Success
                console.log(responseJson)
                const obj = responseJson;

                // Code for parsing to go here
                for (let i = 0; i < obj.Results.series.length; i++) {
                    const series = obj.Results.series[i];
                    for (let j = 0; j < series.data.length; j++) {  // for every nested element in JSON
                        dataYear[j] = series.data[j].year
                        // console.log(series.data[j].year)
                        dataMonth[j] = series.data[j].periodName
                        // console.log(series.data[j].periodName)
                        dataValue[j] = series.data[j].value
                        // console.log(series.data[j].value)
                    }
                }
                // // Testing to see if array filled with values
                console.log(dataYear)
                console.log(dataMonth)
                console.log(dataValue)
            })
            // If response is not in json then throw error
            .catch((error) => {
                console.alert(error)
                console.log("Error parsing GET")
            });

    return {
        labels: dataMonth,
        datasets: [
            {
                label: 'US Unemployment Rate (percent)',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgb(255,99,132)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                pointRadius: 1,
                pointHoverRadius: 5,
                fill: false,
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                data: dataValue,
                reverse: true
            }
        ],
    };
}


const RateChart = () => {
    return (
        <div>
            <h2>Current unemployment</h2>
            <Line
                data={ Assign() }
                width={100}
                height={50}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    legend: {
                        display: true
                    }
                }}
            />
        </div>
    );
}

export default RateChart;
