import React, { useState, useEffect} from "react";
import { Line } from "react-chartjs-2";
import 'chartjs-chart-geo';
import stateUnemployment from "../march-state-unemployment.json"

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

const JSON_IMPORT = stateUnemployment;

const transformData = obj => {
    let stateNames = [];
    let dataMonth = new Date().getMonth();
    let dataValue = [];

    console.log(obj.length);
    console.log(obj[1].state);
    // Code for parsing json data goes here
    for (let i = 0; i < obj.length; i++) {
        stateNames[i] = obj[i].state;
        dataValue[i] = obj[i].unemploymentPercent;
    }

    return {
        stateNames,
        dataMonth,
        dataValue,
    };
};

const USPageMap = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const {dataLabel, dataValue} = transformData(JSON_IMPORT);
        setData({
            labels: dataLabel,
            datasets: [
                {
                    // code for configuring choropleth data goes here?
                    label: "States",
                    data: dataValue,
                }
            ]
        });
    }, []);

    return (
        <div>
            <h2>National Unemployment</h2>
            <Line
                data={data}
                options={{
                    maintainAspectRatio: true,
                    legend: {
                        display: false
                    },
                    plugins: {
                        // setting plugin options usually goes here
                        scale: {
                            projection: 'albersUsa'
                        },
                        geo: {
                            colorScale: {
                                display: true,
                                position: 'bottom',
                                quantize: 5,
                                legend: {
                                    position: 'bottom-right',
                                },
                            },
                        },
                    }
                }}
            />
        </div>
    );
};

export default USPageMap;

