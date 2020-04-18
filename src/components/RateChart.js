import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

function App() {
    const [activeQuery, setActiveQuery] = useState("NY")
    const [stateData, setStateData] = useState({})

    useEffect(() => {
        async function getData() {
            const res = await fetch(
                'https://api.bls.gov/publicAPI/v2/timeseries/data/'
            );
            const data = await res.json();
            setStateData(data);
        }
        getData();
    },[activeQuery])
}

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'US Unemployment Rate',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const RateChart = () => {
    return (
        <div>
            <h2>Current unemployment</h2>
            <Bar
                data={data}
                width={100}
                height={50}
                options={{
                    responsive: true,
                    maintainAspectRatio: true
                }}
            />

        </div>
        // Testing api call data format
    );
}

export default RateChart;
