import React, {useEffect, useState} from "react";

const API_KEY = `${process.env.REACT_APP_BLS_API_KEY}`;
const API_URL = 'https://api.bls.gov/publicAPI/v2/timeseries/data/LNS14000000?registrationkey=' + API_KEY + '&startyear=2020&endyear=2020';


// API-URL fetch function for calling each individually
function callAPIForState() {
    let iterator = "01";
    let get_country_string = [];

    for (let i = 0; i < 56; i++) {
        if (i === 3 || i === 7 || i === 14 || i === 43 || i === 52) {
            continue; // not associated with state, move to next iteration
        } else {
            if (i < 10) {
                iterator = "0" + i;
            } else { // else if greater than 10
                iterator = i;
            }
            get_country_string[i] = 'LASST' + iterator + '0000000000003';
        }
    }
    get_country_string[56] = 'LASST720000000000003'; // Count puerto rico as #56


    // return the api url for use with effect fetch
    // return 'https://api.bls.gov/publicAPI/v2/timeseries/data/' + get_country_string +
    //     '?registrationkey=' + API_KEY + '&startyear=2020&endyear=2020';
    return get_country_string; // return list of API codes for retrieval
}

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


//
function EmploymentRate({data}) {

    let {dataValue, dataMonth} = data;

    // states whether the last 3 months jobs were lost or gained on average
    let iterator; // assigns

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
    // Puerto Rico = 72 ***
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

    callAPIForState(); // call api for specific state data

    return (
        <tr>
            {/*State name*/}
            <th scope={"row"}>StateName</th>
            {/*Unemployed*/}
            <td>00,000,000</td>
            {/*Rate*/}
            <td>00%</td>
            {/*Participation*/}
            <td>00%</td>
        </tr>
    );
}

const StateEmploymentTable = () => {
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

    // Return the formatted html data from @EmploymentRate(data) function to render in Statistics.js
    // Returns the table and row for each state (all at once).
    return (
        <tbody>
        {data && <EmploymentRate data={data}/>}
        </tbody>
    );
};

export default StateEmploymentTable;
