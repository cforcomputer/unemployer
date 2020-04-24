// import React from "react";
//
// const API_URL = '"https://api.bls.gov/publicAPI/v2/timeseries/data/LNS14000000?registrationkey=" + process.env.BLS_API_KEY + "&startyear=2007&endyear=2020"';
//
// const transformData = obj => {
//     let dataYear = [];
//     let dataMonth = [];
//     let dataValue = [];
//     let dataXLabel = []; // for storing both data year and month in one label (x-axis)
//
//     // Code for parsing to go here
//     for (let i = 0; i < obj.Results.series.length; i++) {
//         const series = obj.Results.series[i];
//         for (let j = 0; j < series.data.length; j++) {
//             // for every nested element in JSON
//             dataYear[j] = series.data[j].year;
//             // console.log(series.data[j].year)
//             dataMonth[j] = series.data[j].periodName;
//             // console.log(series.data[j].periodName)
//             dataValue[j] = series.data[j].value;
//             // console.log(series.data[j].value)
//         }
//     }
//     // Reverse the data array
//     dataYear = dataYear.reverse();
//     dataMonth = dataMonth.reverse();
//     dataValue = dataValue.reverse();
//     for (let i = 0; i < dataMonth.length; i++) {
//         // append month and year together
//         dataXLabel[i] = dataMonth[i] + " " + dataYear[i];
//     }
//
//     return {
//         dataYear,
//         dataMonth,
//         dataValue,
//         dataLabel: dataXLabel
//     };
// };
//
// const OverviewCard = () => {
//     return (
//         <div>
//
//         </div>
//     );
// }
