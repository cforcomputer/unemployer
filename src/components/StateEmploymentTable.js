import React, {useState, useEffect} from "react";

const API_KEY = `${process.env.REACT_APP_BLS_API_KEY}`;
const API_URL = 'https://api.bls.gov/publicAPI/v2/timeseries/data/LNS14000000?registrationkey=' + API_KEY + '&startyear=2020&endyear=2020';

// API-URL fetch function for calling each individually
// function API_URL() {
//     let iterator = "01";
//     let get_country_string;
//
//     get_country_string = 'LASST' + iterator + '0000000000003';
//     let api_string = 'https://api.bls.gov/publicAPI/v2/timeseries/data/'+ get_country_string +
//         '?registrationkey=' + API_KEY + '&startyear=2020&endyear=2020';
//
//     // return the api url for use with effect fetch
//     return api_string;
// }

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


    return (
        <div>

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
