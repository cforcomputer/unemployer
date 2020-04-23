import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from 'react-chartjs-2';

// TESTING FOR FETCHING API FROM WWW.BLS.GOV
// Data input for the RateChart chart.js generation -> 'data'
const API_URL =
    "https://api.bls.gov/publicAPI/v2/timeseries/data/LNS14000000?registrationkey=983aa868d1b74941b0e0343091f33fbc&startyear=2006&endyear=2020";

const transformData = obj => {
    let dataYear = [];
    let dataMonth = [];
    let dataValue = [];
    let dataLabel = []; // for storing both data year and month in one label

    // Code for parsing to go here
    for (let i = 0; i < obj.Results.series.length; i++) {
        const series = obj.Results.series[i];
        for (let j = 0; j < series.data.length; j++) {
            // for every nested element in JSON
            dataYear[j] = series.data[j].year;
            // console.log(series.data[j].year)
            dataMonth[j] = series.data[j].periodName;
            // console.log(series.data[j].periodName)
            dataValue[j] = series.data[j].value;
            // console.log(series.data[j].value)
        }
    }
    // Reverse the data array
    dataYear = dataYear.reverse();
    dataMonth = dataMonth.reverse();
    dataValue = dataValue.reverse();
    for (let i = 0; i < dataMonth.length; i++) {
        // append month and year together
        dataLabel[i] = dataMonth[i] + " " + dataYear[i];
    }

    return {
        dataYear,
        dataMonth,
        dataValue,
        dataLabel
    };
};

const RateChart = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(API_URL, {
            method: "GET"
        })
            .then(response => response.json())
            .then(responseJson => {
                const { dataLabel, dataValue } = transformData(responseJson);
                setData({
                    labels: dataLabel,
                    datasets: [
                        {
                            label: "US Unemployment Rate (percent)",
                            backgroundColor: "rgba(255,99,132,0.2)",
                            borderColor: "rgb(255,99,132)",
                            borderWidth: 1.5,
                            hoverBackgroundColor: "rgba(255,99,132,0.4)",
                            hoverBorderColor: "rgba(255,99,132,1)",
                            pointRadius: 1,
                            pointHoverRadius: 5,
                            pointBorderWidth: 1,
                            pointHoverBorderWidth: 2,
                            pointHitRadius: 1,
                            fill: true,
                            lineTension: 0.4,
                            borderCapStyle: "butt",
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: "miter",
                            data: dataValue,
                            reverse: true,
                            xAxes: [{
                                type: 'time',
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 20
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10
                                }
                            }],
                        }
                    ],
                });
            })
            // If response is not in json then throw error
            .catch(error => {
                console.alert(error);
                console.log("Error parsing GET");
            });
    }, []);

    return (
        <div>
            <h2>Current unemployment</h2>
            {data ? (
                <Line
                    data={data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: true,
                        legend: {
                            display: true
                        }
                    }}
                />
            ) : (
                <>loading...</>
            )}
        </div>
    );
};

export default RateChart;
