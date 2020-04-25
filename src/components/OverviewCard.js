import React, {useState} from "react";

const API_KEY=`${process.env.REACT_APP_BLS_API_KEY}`;
const API_URL = "https://api.bls.gov/publicAPI/v2/timeseries/data/CES0000000001?registrationkey=" + API_KEY;

// return data as an object
const transformData = obj => {
    let dataYear = [];
    let dataMonth = [];
    let dataValue = [];
    let calculatedAverage = [];
    let sum;
    let decreaseTrueElseFalse; // says whether or not jobs are negative or positive

    // Code for parsing to go here
    for (let i = 0; i < obj.Results.series.length; i++) {
        const series = obj.Results.series[i];
        for (let j = 0; j < series.data.length; j++) {
            // for every nested element in JSON
            dataYear[j] = series.data[j].year;
            dataMonth[j] = series.data[j].periodName;
            // Expand abbreviations in thousands to actual number in millions
            dataValue[j] = Number(series.data[j].value) * 1000;
        }
    }

    // Calculate average jobs added over the last 6 months
    // 4 = Nov
    // 3 = Dec
    // 2 = Jan
    // 1 = Feb
    // 0 = March
    for (let i = 4; i > 1; i--) {
        calculatedAverage[i] = dataValue[i - 1] - dataValue[i];
    }

    sum = calculatedAverage.reduce((a, b) => a + b, 0)
    let average = (sum / 3) | 0; // find average & convert to int

    // if negative, jobs were lost
    decreaseTrueElseFalse = average < 0;

    return {
        dataYear,
        dataMonth,
        average,
        decreaseTrueElseFalse,
    };
};



let MONTH;
let AVERAGE;
let DECREASE;

function JobsAreNegative() {

    console.log(MONTH[0])
    // states whether the last 3 months jobs were lost or gained on average
    let lastAverageUpOrDown; // assigns
    if (AVERAGE > 0) {
        lastAverageUpOrDown = "added";
    } else {
        lastAverageUpOrDown = "lost";
    }

    if (DECREASE) {
        return (
            <div>
                <span>INCREASED</span>
                <h3>{AVERAGE} jobs</h3>
            </div>
        );
    } else {
        return (
            <div>
                <span>DECREASED</span>
                <p>were lost in {MONTH[0]}, compared to the
                    {AVERAGE} jobs {lastAverageUpOrDown} over the
                    previous 3 months.</p>
            </div>
        );
    }
}

const OverviewCard = () => {
        fetch(API_URL, {
            method: "GET"
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                const {dataYear, dataMonth, average, decreaseTrueElseFalse} = transformData(responseJson);
                // Return increased or decreased value
                MONTH = dataMonth;
                AVERAGE = average;
                DECREASE = decreaseTrueElseFalse;
            })
            .catch(error => {
                console.log("Error parsing GET");
            });
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md-5 "}>
                    <div className={"card"}>
                        <div className={"card-body"}>
                            <b><p className={"card-title"}>JOBS</p></b>
                            <div className={"card-text"}>
                                { JobsAreNegative() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewCard;
