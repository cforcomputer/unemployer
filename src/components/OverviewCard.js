import React, {useEffect} from "react";

const API_KEY=`${process.env.REACT_APP_BLS_API_KEY}`;
const API_URL = "https://api.bls.gov/publicAPI/v2/timeseries/data/CES0000000001?registrationkey=" + API_KEY;

const transformData = obj => {
    let dataYear = [];
    let dataMonth = [];
    let dataValue = [];
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

    let calculatedAverage = [];
    // Calculate average jobs added over the last 6 months
    // 4 = Nov
    // 3 = Dec
    // 2 = Jan
    // 1 = Feb
    // 0 = March
    for (let i = 4; i > 0; i--) {
        calculatedAverage[i] = dataValue[i - 1] - dataValue[i];
    }
    let sum = 0;
    for (let i = 0; i < calculatedAverage.length; i++) {
        sum += calculatedAverage[i];
    }
    let average = sum / 3;

    // if negative, jobs were lost
    decreaseTrueElseFalse = average < 0;
    // Set current month
    console.log(dataMonth[0])
    return {
        dataYear,
        dataMonth,
        average,
        decreaseTrueElseFalse,
    };
};

const OverviewCard = () => {
    let data = {};
    useEffect(() => {
        fetch(API_URL, {
            method: "GET"
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                data = transformData(responseJson);
                console.log(data)
            });
    })

    // Return increased or decreased value
    function JobsAreNegative(data) {
        // states whether the last 3 months jobs were lost or gained on average
        let lastAverageUpOrDown; // assigns
        if ( data.average > 0) {
            lastAverageUpOrDown = "added";
        } else {
            lastAverageUpOrDown = "lost";
        }

        console.log(String(data.date))
        if (data.decreaseTrueElseFalse) {
            return (
                <div>
                    <span>INCREASED</span>
                    <h3>{ data.average } jobs</h3>
                </div>
            );
        } else {
            return (
                <div>
                    <span>DECREASED</span>
                    <p>were lost in { data.date }, compared to the
                        { data.average } jobs { lastAverageUpOrDown } over the
                        previous 3 months.</p>
                </div>
            );
        }
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md-5 "}>
                    <div className={"card"}>
                        <div className={"card-body"}>
                            <b><p className={"card-title"}>JOBS</p></b>
                            <div className={"card-text"}>
                                { JobsAreNegative(data) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewCard;
