import React, {useState, useEffect} from "react";

const API_KEY = `${process.env.REACT_APP_BLS_API_KEY}`;
const API_URL = 'https://api.bls.gov/publicAPI/v2/timeseries/data/LNS14000000?registrationkey=' + API_KEY + '&startyear=2020&endyear=2020';

// return data as an object
const transformData = obj => {
    // let dataYear = [];
    let dataValue = [];
    let dataMonth = [];

    // Code for parsing to go here
    for (let i = 0; i < obj.Results.series.length; i++) {
        const series = obj.Results.series[i];
        for (let j = 0; j < series.data.length; j++) {
            dataValue[j] = series.data[j].value;
            dataMonth[j] = series.data[j].periodName;
        }
    }

    return {
        dataValue,
        dataMonth
    };
};

function EmploymentRate({data}) {

    let {dataValue, dataMonth} = data;

    // states whether the last 3 months jobs were lost or gained on average
    let badgeIncreaseDecrease, badgeColor, upDownArrow; // assigns

    // Data value 0 is the current month
    // Data value 1 is the previous month
    // If current month is larger than the previous month
    // Then ex: 13.3% - 14.7% = -1.40% which is less than 0
    if ((dataValue[0] - dataValue[1]) > 0) {
        badgeIncreaseDecrease = "INCREASED TO";
        badgeColor = "badge badge-danger";
        upDownArrow = "fa fa-angle-double-up";
    } else {
        badgeIncreaseDecrease = "DECREASED TO";

        badgeColor = "badge badge-success";
        upDownArrow = "fa fa-angle-double-down";
        // dataValue[0] *= -1; // if negative, remove negative for sentence structure
    }

    return (
        <div>
            <span className={"" + badgeColor}><i className={"" + (upDownArrow)}/> {badgeIncreaseDecrease}</span>
            <h2>{dataValue[0]}%</h2>
            <p>
                compared to {dataMonth[1]}'s rate of {dataValue[1]}%, the change in unemployment
                was {(dataValue[0] - dataValue[1]).toFixed(2)}% in { dataMonth[0] }.
            </p>
        </div>
    );
}

const OverviewWidget = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(API_URL, {
            method: "GET"
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                const {dataValue, dataMonth} = transformData(responseJson);
                // Return increased or decreased value
                setData({dataValue, dataMonth});
            })
            .catch(error => {
                console.log("Error parsing GET" + error);
            });
    }, []);
    return (
        <div className={"col-md-5"}>
            <div className={"card"}>
                <div className={"card-body"}>
                    <b>
                        <p className={"card-title"}>UNEMPLOYMENT</p>
                    </b>
                    <div className={"card-text"}>
                        {data && <EmploymentRate data={data}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewWidget;
