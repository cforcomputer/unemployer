import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import 'chartjs-chart-geo';
// import 'chartjs-plugin-zoom'; // zoom functionality for charts on scroll

// TESTING FOR FETCHING API FROM WWW.BLS.GOV
// Data input for the RateChart chart.js generation -> 'data'
// LASST = code before iterator for API for individual states
// Alabama = 01
// Alaska = 02
// Arizona = 04
// Arkansas = 05
// California = 06
// Colorado = 08
// Connecticut = 09
// Delaware = 10
// D.C. = 11
// Florida = 12
// Georgia = 13
// Hawaii = 15
// Idaho = 16
// Illinois = 17
// Indiana = 18
// Iowa = 19
// Kansas = 20
// Kentucky = 21
// Louisiana = 22
// Maine = 23
// Maryland = 24
// Massachusetts = 25
// Michigan = 26
// Minnesota = 27
// Mississippi = 28
// Missouri = 29
// Montana = 30
// Nebraska = 31
// Nevada = 32
// New Hampshire = 33
// New Jersey = 34
// New Mexico = 35
// New York = 36
// North Carolina = 37
// North Dakota = 38
// Ohio = 39
// Oklahoma = 40
// Oregon = 41
// Pennsylvania = 42
// Puerto Rico = 72
// Rhode Island = 44
// South Carolina = 45
// South Dakota = 46
// Tennessee = 47
// Texas = 48
// Utah = 49
// Vermont = 50
// Virginia = 51
// Washington = 53
// West Virginia = 54
// Wisconsin = 55
// Wyoming = 56
// all in one = https://www.bls.gov/web/laus/ststdsadata.txt

const API_KEY=`${process.env.REACT_APP_BLS_API_KEY}`;

function API_URL() {
    let iterator = "01";
    let get_country_string;

    get_country_string = 'LASST' + iterator + '0000000000003';
    let api_string = 'https://api.bls.gov/publicAPI/v2/timeseries/data/'+ get_country_string +
        '?registrationkey=' + API_KEY + '&startyear=2020&endyear=2020';

    // return the api url for use with effect fetch
    return api_string;
}

const transformData = obj => {
    let dataYear = [];
    let dataMonth = [];
    let dataValue = [];
    let dataXLabel = []; // for storing both data year and month in one label (x-axis)

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
        dataXLabel[i] = dataMonth[i] + " " + dataYear[i];
    }

    return {
        dataYear,
        dataMonth,
        dataValue,
        dataLabel: dataXLabel
    };
};

const USPageMap = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(API_URL(), {
            method: "GET"
        })
            .then(response => response.json())
            .then(responseJson => {
                const { dataLabel, dataValue } = transformData(responseJson);
                setData({
                    labels: dataLabel,
                    datasets: [
                        {
                            label: "State unemployment rates",
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
                    ]
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
            <h2>National Unemployment</h2>
            {data ? (
                <Line
                    data={data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: true,
                        legend: {
                            display: true
                        },
                        plugins: {
                            scale: {
                                projection: 'albersUsa'
                            },
                            geo: {
                                colorScale: {
                                    display: true
                                }
                            }
                        }
                    }}
                />
            ) : (
                <>loading...</>
            )}
        </div>
    );
};

export default USPageMap;

